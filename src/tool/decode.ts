const decode = (binaryData: any) => {
  if (!binaryData) return ''
  // 创建一个 Uint8Array 用于存储二进制数据
  const data = new Uint8Array(binaryData.split(','))

  // 创建一个新的 TextDecoder 实例
  const decoder = new TextDecoder()

  // 使用 TextDecoder 对象解码二进制数据
  return decoder.decode(data)
}

export default decode
