import fs from 'fs' // 文件服务
import archiver from 'archiver'
import dayjs from 'dayjs'
const disDir = 'dist' // 打包之后的dist 目录
const pJson = JSON.parse(fs.readFileSync('./package.json', 'utf8'))
let mode: string = '' // 当前打包的模式
let zipFilePath: string = '' // 压缩文件保存路径

// //定义压缩方法
function files () {
  // 创建输出流
  const output = fs.createWriteStream(zipFilePath)
  // 创建 zip 归档器
  const archive = archiver('zip', {
    zlib: { level: 9 } // 设置压缩级别
  })
  // 将输出流绑定到归档器上
  archive.pipe(output)
  // 添加要归档的 dist 文件夹
  archive.directory(disDir, 'dist')
  // 完成归档操作
  archive.finalize()

  archive.on('end', function () {
    console.log(`[${mode}] 压缩完成`)
    remoaveFiles()
    fs.rmdirSync(disDir, { recursive: true })
  })
}

function remoaveFiles () {
  fs.rmdir(disDir, { recursive: true }, (err) => {
    if (err) return console.error(err)
    console.log('dist目录删除成功')
  })
}

function addVersion () {
  const data = {
    version: new Date().getTime(),
    build: mode
  }
  const json = JSON.stringify(data)
  // 在这里更新版本号信息
  fs.writeFile('./dist/ver.json', json, err => {
    if (err) throw err
    console.log(`版本号已更新为：${data.version}`)
    console.log(`打包指令为${mode}`)
    files()
  })
}

const compressedFiles = (data: { mode: string }) => {
  mode = data.mode || 'default' // 当前打包的模式
  zipFilePath = `${pJson.name}-${mode}.zip` // 压缩文件保存路径
  setTimeout(() => {
    addVersion()
    console.log('开始压缩', dayjs().unix())
  }, 1000 * 5.5)
}

// module.exports = compressedFiles
export default compressedFiles
