const arraybufferToJson = (res: any) => {
  try {
    const uint8Msg: any = new Uint8Array(res)
    const decodedString = String.fromCharCode.apply(null, uint8Msg)
    return JSON.parse(decodedString)
  } catch (err) {
    return res
  }
}

export default arraybufferToJson
