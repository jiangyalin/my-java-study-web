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

export type Parameter<T> = T & {
  query?: T;
  body?: T;
  path?: any;
  headers?: Record<string, any>;
}

export interface RequestFunc<T> {
  (
    api: {
      url: string,
      method: Method,
      baseUrl?: string,
      responseType?: string
    },
    data: Parameter<T>,
    showErrMsg?: boolean
  ): any,
}
