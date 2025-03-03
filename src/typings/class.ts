/** 分页 */
export class Page {
  /** 总数 */
  total: number
  /** 分页大小 */
  pageSize: number
  /** 页码 */
  currentPage: number
  /** 分页大小可选项 */
  pageSizesOptions: number[]

  constructor ({ total = 100, pageSize = 50, currentPage = 1, pageSizesOptions = [50, 100, 300, 500, 800] } = {}) {
    /** 总数 */
    this.total = total
    /** 分页大小 */
    this.pageSize = pageSize
    /** 页码 */
    this.currentPage = currentPage
    /** 分页大小可选项 */
    this.pageSizesOptions = pageSizesOptions
  }
}
