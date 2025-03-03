/** 分页 */
export class PageSelectTable {
  /** 总数 */
  count: number
  /** 分页大小 */
  limit: number
  /** 页码 */
  page : number
  /** 分页大小可选项 */
  pageSizesOptions: number[]

  constructor ({ count = 10, limit = 10, page = 1, pageSizesOptions = [10, 20, 50, 100, 200] } = {}) {
    /** 总数 */
    this.count = count
    /** 分页大小 */
    this.limit = limit
    /** 页码 */
    this.page = page
    /** 分页大小可选项 */
    this.pageSizesOptions = pageSizesOptions
  }
}
