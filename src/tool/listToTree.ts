const listToTree = (arr: any[], parentId: string = '0') => {
  const loop = (parentId: string) => {
    const res: any = []
    for (let i = 0; i < arr.length; i++) {
      const item = arr[i]

      if (item.pid !== parentId) {
        continue
      }

      const children = loop(item.id)
      if (children.length) item.children = children
      res.push(item)
    }
    return res
  }
  return loop(parentId)
}

export default listToTree
