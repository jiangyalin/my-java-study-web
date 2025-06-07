import ajax from '@/api/ajax'
import { Method } from '@/api/interface/enum'
import type { definitions, operations } from './interface/api-docs'

export type UserAddReqType = operations['userAddUsingPOST']['parameters']['body']['userAddDto']
export type UserAddResType = definitions['Result«UserInfoResponseDto»']
/**
 * @description 新增用户
 * @param {UserAddReqType} data 请求参数
 * @returns {Promise<UserAddResType>} ajax
 */
const postUserAdd = (data: UserAddReqType): Promise<UserAddResType> => {
  return ajax({
    url: '/user/add',
    method: Method.POST
  }, data)
}

export type UserDeleteReqType = operations['userDeleteUsingPOST']['parameters']['body']['userDeleteDto']
export type UserDeleteResType = definitions['Result«OkResponseDto»']
/**
 * @description 删除用户
 * @param {UserDeleteReqType} data 请求参数
 * @returns {Promise<UserDeleteResType>} ajax
 */
const postUserDelete = (data: UserDeleteReqType): Promise<UserDeleteResType> => {
  return ajax({
    url: '/user/delete',
    method: Method.POST
  }, data)
}

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

export type UserListReqType = operations['userListUsingGET']['parameters']['query']
export type UserListResType = definitions['Result«Page«UserListResponseDto»»']
/**
 * @description 获取用户信息列表
 * @param {UserListReqType} data 请求参数
 * @returns {Promise<UserListResType>} ajax
 */
const getUserList = (data: UserListReqType): Promise<UserListResType> => {
  return ajax({
    url: '/user/list',
    method: Method.GET
  }, data)
}

export type UserUpdateReqType = operations['userUpdateUsingPOST']['parameters']['body']['userUpdateDto']
export type UserUpdateResType = definitions['Result«UserInfoResponseDto»']
/**
 * @description 编辑用户
 * @param {UserUpdateReqType} data 请求参数
 * @returns {Promise<UserUpdateResType>} ajax
 */
const postUserUpdate = (data: UserUpdateReqType): Promise<UserUpdateResType> => {
  return ajax({
    url: '/user/update',
    method: Method.POST
  }, data)
}

export default {
  postUserAdd,
  postUserDelete,
  getUserInfo,
  getUserInfoById,
  getUserList,
  postUserUpdate
}
