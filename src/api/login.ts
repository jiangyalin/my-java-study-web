import ajax from '@/api/ajax'
import { Method } from '@/api/interface/enum'
import type { definitions, operations } from './interface/api-docs'

export type LoginReqType = operations['loginUsingPOST']['parameters']['body']['loginDto']
export type LoginResType = definitions['Result«string»']
/**
 * @description 登录
 * @param {LoginReqType} data 请求参数
 * @returns {Promise<LoginResType>} ajax
 */
const postLogin = (data: LoginReqType): Promise<LoginResType> => {
  return ajax({
    url: '/login',
    method: Method.POST
  }, data)
}

export default {
  postLogin
}
