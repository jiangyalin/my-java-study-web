// 前端路由表
// import listToTree from './listToTree'
import myComponets from '../../src/router/pathToComponet'

/**
 * 动态生成菜单
 * @param data
 * @returns {Promise<any>}
 */
const generatorDynamicRouter = (data: any[]) => {
  const treeMap: any = (list: any[]) => {
    return list.map((item: any) => {
      return {
        ...item,
        component: item.path ? myComponets[item.path] || undefined : undefined,
        name: item.code || '',
        code: item.code,
        children: treeMap(item.children || [])
      }
    })
  }
  return treeMap(data)
}

export default generatorDynamicRouter
