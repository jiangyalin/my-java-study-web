import Axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import ajax from '../ajax'
import type { ResPage } from '../interface/type'// Parameter
import { Method } from '../interface/enum'
import { bookList } from './mockData/book'

const mock = new MockAdapter(Axios, { delayResponse: 500 })

mock
  .onGet('/book/list')
  .reply(200, {
    code: 200,
    data: {
      rows: bookList,
      total: 300
    },
    msg: ''
  })
  .onAny()
  .passThrough()

export const getBookList = (data: ResPage): any => {
  return ajax(
    {
      url: '/book/list',
      method: Method.GET
    },
    data
  )
}

export default {
  getBookList
}
