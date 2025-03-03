const list:any[] = []

const treeToList = (arr: any[], keystr:string) => {
  arr.forEach(item => {
    list.push(item)
    if (keystr !== '') {
      treeToList(item[keystr], '')
    }
  })

  return list
}

export default treeToList
