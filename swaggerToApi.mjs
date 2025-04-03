import fs from 'node:fs'
import openapiTS from 'openapi-typescript'
import axios from 'axios'

/** 根据swagger生产api封装 */

/** 配置项 */
// 文件夹
const folder = './src/api/'
// swagger列表
const swaggerList = [
  'http://localhost:8080/v2/api-docs'
]
// 屏蔽组
const maskGroups = ['api', 'book', 'learn', 'main', 'index']
// 别名映射
const aliasMap = {
  public: 'publicApi'
}

/** 首字母大写 */
const capitalizeFirstLetter = string => string.charAt(0).toUpperCase() + string.slice(1)

/** 中横线转小驼峰 */
const toCamelCase = string => string.replace(/-./g, (match) => match[1].toUpperCase())

/** 创建api层文件 */
const createApiFile = (swaggerData, paths, fileName, swaggerFileName) => {
  // 是否存在Operations
  let isExistOperations = false
  // 是否存在components
  let isExistComponents = false
  // 是否为v1版本
  // const isV1 = swaggerData?.info?.version === 'v1'
  const isV1 = true
  // 包名
  const componentsName = isV1 ? 'definitions' : 'components'
  const list = []
  for (let i = 0; i < paths.length; i++) {
    let path = paths[i]
    for (const method in swaggerData.paths[path]) {
      const node = swaggerData.paths[path][method]

      let name = toCamelCase(path.split('/').map(item => capitalizeFirstLetter(item)).join(''))
      const isPath = node?.parameters?.some(item => item.in === 'path')
      if (isPath) {
        const pathData = node.parameters.filter(item => item.in === 'path').map(item  => item.name)
        pathData.forEach(item => {
          name = name.replace(`{${item}}`, 'By' + capitalizeFirstLetter(item))

          if (path.substring(path.length - 1) === '}') path = path.replace(`{${item}}`, `' + data.path.${item}`)
          else path = path.replace(`{${item}}`, `' + data.path.${item} + '`)
        })

      }

      let reqType = '{}'
      const operationId = node.operationId
      let isExistParameter = false
      if (node.parameters) {
        const isQuery = node.parameters.some(item => item.in === 'query')
        const isBody = node.parameters.some(item => item.in === 'body')
        const isSchema = node.parameters.some(item => Boolean(item?.schema?.$ref) && item.in === 'body')
        const name = node.parameters.find(item => item.in === 'body')?.name || ''
        if (isQuery || isBody) {
          isExistOperations = true
          isExistParameter = true
        }
        if (isQuery) reqType = `operations['${operationId}']['parameters']['query']`
        if (isBody && isSchema && name) reqType = `operations['${operationId}']['parameters']['body']['${name}']`
        if (isBody && isSchema && !name) reqType = `operations['${operationId}']['parameters']['body']['dto']`
        if (isBody && !isSchema) reqType = `operations['${operationId}']['parameters']['body']`
      } else if (node.requestBody) {
        isExistOperations = true
        isExistParameter = true
        if (node.requestBody.content['text/json']) {
          reqType = `operations['${operationId}']['requestBody']['content']['text/json']`
        }
        if (node.requestBody.content['multipart/form-data']) {
          reqType = `operations['${operationId}']['requestBody']['content']['multipart/form-data']`
        }
      }

      const res200 = node.responses[200]
      let resType = 'any'
      // 是否存在类
      const isClass = Boolean(res200?.content || res200?.schema?.$ref)
      if (isClass) {
        isExistComponents = true
        let ref = ''
        if (res200?.content) ref = res200.content['application/json'].schema.$ref
        if (res200?.schema?.$ref) ref = res200.schema.$ref
        resType = ref.substring(2).split('/')
          .map((item, index) => index === 0 ? item : `['${item}']`).join('')
      }

      const apiCode =
        `export type ${name}ReqType = ${reqType}
export type ${name}ResType = ${resType}
/**
 * @description ${node.summary}
 * @param {${name}ReqType} data 请求参数
 * @returns {Promise<${name}ResType>} ajax
 */
const ${method + name} = (data: ${name}ReqType${isExistParameter ? '' : ' = {}'}): Promise<${name}ResType> => {
  return ajax({
    url: '${path}',
    method: Method.${method === 'get' ? 'GET' : 'POST'}
  }, data)
}`

      list.push({
        name,
        code: apiCode,
        apiName: method + name
      })
    }
  }

  let iptCode = ''
  if (isExistComponents && isExistOperations) {
    iptCode = `\nimport type { ${componentsName}, operations } from './interface/${swaggerFileName}'`
  }
  if (isExistComponents && !isExistOperations) {
    iptCode = `\nimport type { ${componentsName} } from './interface/${swaggerFileName}'`
  }
  if (!isExistComponents && isExistOperations) {
    iptCode = `\nimport type { operations } from './interface/${swaggerFileName}'`
  }

  const codeHead =
    `import ajax from '@/api/ajax'
import { Method } from '@/api/interface/enum'${iptCode}`

  const codeBody = list.map(item => item.code).join('\n\n')

  const codeFoot =
    `export default {
  ${list.map(item => item.apiName).join(',\n  ')}
}\n`
  const apiFileCode = codeHead + '\n\n' + codeBody + '\n\n' + codeFoot

  fs.writeFileSync(folder + fileName + '.ts', apiFileCode)
}

const globalGroupName = []
const getSwagger = async (url) => {
  const swaggerFileName = url.split('/')[url.split('/').length - 1]

  const res = await axios({
    url,
    method: 'get',
    timeout: 1000 * 50
  })

  const ast = await openapiTS(res.data, {
    formatter (node) {
      if (node.type === 'integer') {
        return node.format === 'int32' || node.format === 'byte' ? ('number' + (node.required ? '' : ' | null')) : 'string'
      }
      if (node.type === 'number') {
        return 'number' + (node.required ? '' : ' | null')
      }
      if (node.type === 'string' && node.format === 'binary') {
        return 'any'
      }
    }
  })

  const data = ast.replace(/"/g, '\'').replace(/{integer}/g, '{number}').replace(/data\?: /g, 'data: ')
  fs.writeFileSync(folder + 'interface/' + swaggerFileName + '.ts', data)

  /** 拆分接口，以路径分组 */
  const apiGroupMap = {}
  for (const path in res.data.paths) {
    const key = path.split('/')[1]
    if (maskGroups.includes(key)) continue
    if (!apiGroupMap[key]) apiGroupMap[key] = []
    apiGroupMap[key].push(path)
  }

  for (const groupName in apiGroupMap) {
    globalGroupName.push({
      original: groupName, // 原名
      alias: aliasMap[groupName] || groupName // 别名
    })
    createApiFile(res.data, apiGroupMap[groupName], groupName, swaggerFileName)
  }

  // 创建集成文件index.ts
  const indexCodeHead = globalGroupName.map(({ original, alias }) => `import ${alias} from './${original}'\n`).join('')
  const indexCodeTail =
    `export default {
  ${globalGroupName.map(item => item.alias).join(',\n  ')}
}\n`
  fs.writeFileSync(folder + 'index.ts', indexCodeHead + '\n' + indexCodeTail)
}

const main = async () => {
  if (!fs.existsSync(folder + 'interface')) {
    await fs.mkdir(folder + 'interface', { recursive: true }, () => {})
  }
  swaggerList.forEach(swaggerUrl => {
    getSwagger(swaggerUrl)
  })
}

main()
