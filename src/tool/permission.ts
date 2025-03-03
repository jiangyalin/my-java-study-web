// 返回是否拥有权限
const permission = (edit:string, info:string) => {
  const btn = JSON.parse(localStorage.getItem('buttonPermissions') as string)
  const isEdit = btn.includes(edit)
  const isInfo = btn.includes(info)
  if (isEdit && isInfo) {
    return 1
    // 两个按钮都存在
  } else if (isEdit && !isInfo) {
    // 只有编辑
    return 2
  } else if (!isEdit && isInfo) {
    // 只有查看
    return 3
  } else {
    // 什么都没有
    return 4
  }
}
export default permission
