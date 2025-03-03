import dayjs from 'dayjs'
import http from 'http'
import { exec } from 'child_process'
import * as fs from 'fs/promises'
// import fs from 'fs'
// const { exec } = require('child_process')
// const fs = require('fs').promises
const disDir = 'dist' // 打包之后的dist 目录
const currentDate = dayjs()
let mode = '' // 当前打包的模式
let intervalId = null
const repeatedlyNum = 5 // 保存最近的几次更新记录

const formatDate = function (date) {
  return date.format('YYYY-MM-DD')
}
const map = {
  prod: 'http://192.168.3.125:10214', // 无外网
  test: 'http://192.168.3.125:10214'
  // test: 'http://192.168.3.166:8029'
}

const dispose = (data) => {
  const combinedData = []
  for (let i = 0; i < data.length; i += 2) {
    const lines = data[i].split('\n')
    const dateLine = lines.find((line) => line.startsWith('Date:'))
    const commitDate = dateLine ? dayjs(dateLine.replace('Date:', '').trim(), 'ddd MMM DD HH:mm:ss YYYY Z').format('YYYY-MM-DD HH:mm:ss') : 'Unknown Date'
    const obj = {
      更新日志: `时间：${commitDate} -------- 详细描述：${data[i + 1].trim()}`,
      msg: data[i + 1].trim()
    }
    combinedData.push(obj)
  }
  const filteredData = combinedData.filter((item) => !(item.msg.includes('Merge remote-tracking branch') || item.msg.includes('Merge branch')))
  const jsonData = {
    更新流水: filteredData.map(item => item.更新日志),
    本次发布时间: dayjs(currentDate).format('YYYY-MM-DD HH:mm:ss') // 记录当前时间
  }
  return JSON.stringify(jsonData, null, 2)
}

const gitLog = async (data) => {
  mode = data.mode || 'default' // 当前打包的模式
  intervalId = setInterval(checkFileExists, 10000)
  await checkFileExists() // 等待文件检查完成
}

// 查找文件是否存在
const checkFileExists = async () => {
  try {
    await fs.readdir(disDir) // 检查文件是否存在
    console.log('开始写入数据')
    clearInterval(intervalId)
    await init() // 等待初始化完成
  } catch (err) {
    // 处理错误
    console.error('文件读取错误:', err)
  }
}

let thisJsonData
let jsonOutput
const init = async () => {
  try {
    thisJsonData = await fetchData(`${map[mode]}/${mode}output.json`)
  } catch (error) {
    console.error(`初始化失败: ${error}`)
    const lastWeek = dayjs().subtract(7, 'day')
    thisJsonData = {
      本次发布时间: formatDate(lastWeek)
    }
  }
  processData()
}

const historyRecord = async () => {
  try {
    const jsonData = await fetchData(`${map[mode]}/${mode}history.json`)
    processHisData(jsonData)
  } catch (error) {
    console.error(`历史记录获取失败: ${error}`)
    processHisData()
  }
}

const fetchData = (url) => {
  return new Promise((resolve, reject) => {
    const req = http.get(url, (res) => {
      let rawData = ''
      res.on('data', (chunk) => {
        rawData += chunk
      })
      res.on('end', () => {
        try {
          const jsonData = JSON.parse(rawData)
          resolve(jsonData)
        } catch (error) {
          console.error(`解析 JSON 失败: ${error}`)
          reject(error)
        }
      })
    })

    req.on('error', (error) => {
      console.error(`请求出错: ${error}`)
      reject(error)
    })

    req.setTimeout(5000, () => {
      console.error('请求超时')
      req.abort()
      reject(new Error('请求超时'))
    })
  })
}

// 写入历史的数据
const processHisData = (obj = {}) => {
  const _logObj = {
    [thisJsonData.本次发布时间]: JSON.parse(jsonOutput)
  }
  const oLogKeyList = Object.keys(obj).sort((a, b) => new Date(b.本次发布时间) - new Date(a.本次发布时间))

  for (let i = 0; i < repeatedlyNum - 1; i++) {
    const key = oLogKeyList[i]
    if (!key) break
    _logObj[key] = obj[key]
  }

  fs.writeFile(`./dist/${mode}history.json`, JSON.stringify(_logObj, null, 2), 'utf8', (err) => {
    if (err) {
      console.error('写入文件时发生错误: ', err)
      return
    }
    console.log('写入完成 ', dayjs().unix())
    console.log(`JSON 数据已成功写入文件 ${mode}history.json`)
  })
}

// 写入本次更新数据
const processData = () => {
  const lastTime = dayjs(thisJsonData.本次发布时间)
  const gitCommand = `git log --since=${formatDate(lastTime)} --until=${formatDate(currentDate)}`
  exec(gitCommand, async (err, stdout) => {
    if (err) {
      console.error('执行 Git 命令时发生错误: ', err)
      return
    }

    const data = stdout.split('\n\n')
    if (data.length === 1) {
      console.log('无最新提交记录')
      return
    }

    jsonOutput = dispose(data)

    fs.writeFile(`./dist/${mode}output.json`, jsonOutput, 'utf8', (err) => {
      if (err) {
        console.error('写入文件时发生错误: ', err)
        return
      }
      console.log('写入完成 ', dayjs().unix())
      console.log(`JSON 数据已成功写入文件 ${mode}output.json`)
    })
    await historyRecord()
  })
}

// module.exports = gitLog
export default gitLog
