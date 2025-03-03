const crypto = (text: string) => {
  const encoder = new TextEncoder() // 创建一个 TextEncoder 实例
  const data: any = encoder.encode(text) // 将文本转换为二进制数据

  // 将二进制数据转换为Base64字符串
  return data.join(',')
}

export default crypto
