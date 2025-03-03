// 菜单
export interface Menu {
  title: string,
  id: string,
  icon: string,
  path: string,
  name: string,
  code:string,
  children: Array<Menu>
}
