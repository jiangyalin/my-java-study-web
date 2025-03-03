/** 查找特定节点的祖先节点(有问题，待验证，勿用) */
const findTreePath = (tree: Option[] = [], value: string | number = ''): Option[] => {
  // 查找路径的辅助递归函数
  const search = (node: Option, id: string | number, path: any) => {
    path.push(node)

    if (node.value === id) {
      return path
    }

    if (node.children) {
      for (const child of node.children) {
        const resultPath: any = search(child, id, path.slice())
        if (resultPath) {
          return resultPath
        }
      }
    }

    return []
  }

  for (const root of tree) {
    const path = search(root, value, [])
    if (path) return path
  }

  return []
}

export default findTreePath
