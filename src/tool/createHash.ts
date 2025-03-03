// 创建随机哈希值
const createHash = (hashLength: number = 24) => {
  return Array.from(Array(Number(hashLength) || 24), () => Math.floor(Math.random() * 36).toString(36)).join('')
}

export default createHash
