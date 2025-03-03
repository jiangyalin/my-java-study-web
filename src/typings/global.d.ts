// declare module 'vue'
declare module 'js-cookie'
declare module 'js-base64'
declare module 'dayjs'
declare module 'vue-router'
declare module 'element-plus'
declare module 'element-plus/dist/locale/zh-cn.mjs'
declare module 'crypto-js'
declare module 'crypto-js/enc-base64'
declare module 'crypto-js/hmac-sha512'
declare module 'vue-img-cutter'
declare module 'axios'
declare module 'vite-plugin-eslint'
declare module 'decimal'
declare module 'mathjs'
declare module 'nanoid'
declare module 'br-dionysus'
declare module 'colord'
declare module 'colord/plugins/names'
declare module 'colord/plugins/mix'
declare module 'qrcode'

/** 下拉选项 */
interface Option {
  /** 选项的标签，若不设置则默认与value相同 */
  label?: string | number,

  /** 选项的值 */
  value?: string | number | boolean,

  /** 是否禁用该选项 */
  disabled?: boolean,

  /** 子级 */
  children?: Option[] | null

  [propName: string]: any
}
interface UpFileType {
  name: string
  percentage: number,
  raw: File,
  size: number,
  status: string,
  uid: number,
  response? : {
    /** 执行成功 */
    success?: boolean,
    /** 状态码 */
    code?: number | null,
    /** 错误信息 */
    message: any,
    data: ExportResultViewModel,
    /** 附加数据 */
    extras: any,
    /** 时间戳 */
    timestamp?: string | null,
    } | null
}

type OptionsKeys = `${string}Options` | `${string}Map`

// /** 下拉选项及枚举映射集合 */
// interface Filter {
//   [propName: OptionsKeys]: Option[]
// }

/** 表头 */
interface TableTitle {
  /** 显示的标题 */
  label: string,
  /** 字段名称 对应列内容的字段名， 也可以使用 property属性 */
  prop: string
  align?: 'right' | 'left' | 'center'
  /** 对应列的最小宽度， 对应列的最小宽度， 与 width 的区别是 width 是固定的，min-width 会把剩余宽度按比例分配给设置了 min-width 的列 */
  minWidth?: number | string,
  /** 列的 className */
  className?: string,
  /** 对应列是否可以排序， 如果设置为 'custom'，则代表用户希望远程排序，需要监听 Table 的 sort-change 事件 */
  sortable?: boolean,
  /** 数据过滤的选项， 数组格式，数组中的元素需要有 text 和 value 属性。 数组中的每个元素都需要有 text 和 value 属性。 */
  filters?: {
    text: string | number,
    value: string | number
  }[],
  /** 数据过滤使用的方法， 如果是多选的筛选项，对每一条数据会执行多次，任意一次返回 true 就会显示。 */
  filterMethod?: Function,
  /** 表头对齐方式， 若不设置该项，则使用表格的对齐方式 */
  headerAlign?: 'left' | 'center' | 'right',
  /** 列是否固定在左侧或者右侧。 true 表示固定在左侧 */
  fixed?: true | 'left' | 'right',
}
