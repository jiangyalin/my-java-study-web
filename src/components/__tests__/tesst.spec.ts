import { describe, it, expect } from 'vitest'
import tool from './tool'

// 这是一个函数测试示例
describe('这是一个函数测试示例', () => {
  // 这个结果应该是正确的
  it('3', () => {
    expect(tool()).toBe(3)
  })
  // 这个结果应该是错误的
  it('34', () => {
    expect(tool()).toBe(34)
  })
  // it('tool应该是一个函数', () => {
  //   expectTypeOf(tool).toBeFunction()
  // })
  // it('返回值应该是number', () => {
  //   expectTypeOf(tool).toMatchTypeOf<{ name: string }>()
  // })
})
