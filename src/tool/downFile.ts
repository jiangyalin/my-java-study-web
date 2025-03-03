import config from '@/config'

/**
 * @description 下载文件
 * */
const downFile = (href:string) => {
  const a = document.createElement('a')
  a.href = config.serverApi + href
  a.style.display = 'none'
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
}

export default downFile
