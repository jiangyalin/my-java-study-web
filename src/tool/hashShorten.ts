import CryptoJS from 'crypto-js'

/**
 * @description 计算哈希值
 * */
const hashShorten = (largeString: string, maxLength = 36): string => {
  const hash = CryptoJS.SHA256(largeString)

  const hashHex = hash.toString(CryptoJS.enc.Hex)

  return hashHex.slice(0, maxLength)
}

export default hashShorten
