import ajax from '@/api/ajax'
import { Method } from '@/api/interface/enum'
import type { definitions, operations } from './interface/api-docs'

export type UserInfoReqType = {}
export type UserInfoResType = definitions['Result«UserInfoResponseDto»']
/**
 * @description 获取用户信息
 * @param {UserInfoReqType} data 请求参数
 * @returns {Promise<UserInfoResType>} ajax
 */
const getUserInfo = (data: UserInfoReqType = {}): Promise<UserInfoResType> => {
  return ajax({
    url: '/user/info',
    method: Method.GET
  }, data)
}

export type UserInfoByIdReqType = operations['userInfoByIdUsingGET']['parameters']['query']
export type UserInfoByIdResType = definitions['Result«UserInfoResponseDto»']
/**
 * @description 获取用户信息
 * @param {UserInfoByIdReqType} data 请求参数
 * @returns {Promise<UserInfoByIdResType>} ajax
 */
const getUserInfoById = (data: UserInfoByIdReqType): Promise<UserInfoByIdResType> => {
  return ajax({
    url: '/user/infoById',
    method: Method.GET
  }, data)
}

export default {
  getUserInfo,
  getUserInfoById
}
