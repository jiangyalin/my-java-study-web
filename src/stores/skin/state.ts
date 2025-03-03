export interface SkinConfig {
  /** 深色主题 */
  darkTheme: boolean,
  /** 跟随系统 */
  followSystem: boolean,
  /** 组件大小 */
  size: Size,
  /** 主题色 */
  primaryColor: string,
  selectionWidth: number
}

export enum Size {
  /** 大 */
  LARGE = 'large',
  /** 默认 */
  DEFAULT = 'default',
  /** 小 */
  SMALL = 'small'
}

export default (): SkinConfig => ({
  darkTheme: false,
  followSystem: false,
  size: Size.DEFAULT,
  primaryColor: '#646CFF',
  selectionWidth: 40
})
