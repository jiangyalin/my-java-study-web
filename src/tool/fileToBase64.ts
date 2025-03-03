const fileToBase64 = (file: any) => {
  return new Promise((resolve) => {
    const reader = new FileReader() // 实例化文件读取对象

    reader.readAsDataURL(file) // 将文件读取为 DataURL,也就是base64编码

    reader.onload = (e: ProgressEvent<FileReader>) => {
      if (!e.target) return false
      const dataURL = e.target.result // 获得文件读取成功后的DataURL,也就是base64编码

      resolve(dataURL)
    }
  })
}

export default fileToBase64
