import ajax from '@/api/ajax'
import { Method } from '@/api/interface/enum'
import type { definitions, operations } from './interface/api-docs'

export type RegisterReqType = operations['registerUsingPOST']['parameters']['body']['responseDto']
export type RegisterResType = definitions['Result«UserInfoResponseDto»']
/**
 * @description 注册
 * @param {RegisterReqType} data 请求参数
 * @returns {Promise<RegisterResType>} ajax
 */
const postRegister = (data: RegisterReqType): Promise<RegisterResType> => {
  return ajax({
    url: '/register',
    method: Method.POST
  }, data)
}

export default {
  postRegister
}
