/** 菜单块 */
export interface MenuItemType {
  /** 标题 */
  title: string,
  id: string,
  /** 图标 */
  icon: string,
  /** 路由地址 */
  path: string,
  /** 编码（暂同code） */
  name: string,
  /** 编码（暂同name） */
  code: string,
  /** 是否隐藏 */
  isHid: boolean,
  /** 子级 */
  children: MenuItemType[]
}
