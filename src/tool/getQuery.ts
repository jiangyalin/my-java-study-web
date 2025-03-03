/** 解析url中所有的参数名称与值 */
const getQuery = (url: string): { [propName: string]: string } => {
  const str = url.substr(url.indexOf('?') + 1)
  const arr = str.split('&')
  const result = {}
  for (let i = 0; i < arr.length; i++) {
    // item的两个元素分别为参数名和参数值
    const item = arr[i].split('=')
    result[item[0]] = item[1]
  }
  return result
}

export default getQuery
