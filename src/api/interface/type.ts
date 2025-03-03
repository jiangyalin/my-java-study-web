import type { Method } from './enum'

export interface Result {
  code?: any,
  msg?: string,
}

export interface ResultData<T = any> extends Result {
  data?: T,
  code?: number | null,
  msg?: any
}

export interface ResPage {
  pageNo: number,
  pageSize: number,
  [propName: string]: any,
}

export interface Parameter {
  query?: any,
  body?: any,
  headers?: any,
  [propName: string]: any,
}

export interface RequestFunc {
  (
    api: {
      url: string,
      method: Method,
      baseUrl?: string,
      responseType?: string
    },
    data: Parameter,
    showErrMsg?: boolean
  ): any,
}
