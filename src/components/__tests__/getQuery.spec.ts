import { describe, it, expect } from 'vitest'
import getQuery from '../../tool/getQuery'

describe('getQuery', () => {
  it('解析单个query参数', () => {
    const url = 'http://www.baidu.com/?param=value'
    expect(getQuery(url)).toEqual({ param: 'value' })
  })

  it('解析多个query参数', () => {
    const url = 'http://www.baidu.com/?param1=value1&param2=value2'
    expect(getQuery(url)).toEqual({
      param1: 'value1',
      param2: 'value2'
    })
  })

  it('解析包含特殊字符的url', () => {
    const url = 'http://www.baidu.com/?param1=special%20characters%20%21&param2=%E4%BD%A0%E5%A5%BD'
    expect(getQuery(url)).toEqual({
      param1: 'special%20characters%20%21',
      param2: '%E4%BD%A0%E5%A5%BD'
    })
  })

  it('如果不存在query参数，则应返回空对象', () => {
    const url = 'http://example.com/'
    expect(getQuery(url)).toEqual({})
  })

  it('应该解码中文转码', () => {
    const url = 'http:/www.baidu.com/?param1=special%20characters%20%21&param2=%E4%BD%A0%E5%A5%BD'
    console.log('getQuery(url)', getQuery(url))
    expect(getQuery(url)).toEqual({
      param1: 'special characters !',
      param2: '你好'
    })
  })
})
