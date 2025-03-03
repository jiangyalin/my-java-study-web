// import Cookies from 'https://cdn.bootcss.com/jquery-cookie/1.4.1/jquery.cookie.js'
// return false
// 封装GET请求
function getCookie (name) {
  const cookies = document.cookie.split(';') // 将cookie字符串分割成数组
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim() // 使用trim()方法去除前后空格
    if (cookie.indexOf(name + '=') === 0) {
      return cookie.substring(name.length + 1, cookie.length) // 获取cookie的值
    }
  }
  return '' // 当未找到指定cookie时返回空字符串
}

const accessToken = getCookie('token')
const baseUrl = getCookie('apsurl')
export function getAction (url, params) {
  url = baseUrl + url
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', url, true)
    if (accessToken) {
      xhr.setRequestHeader('access_token', accessToken)
    }
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          const data = JSON.parse(xhr.responseText)
          setApsMsg(data)
          resolve(JSON.parse(xhr.responseText))
        } else {
          reject(new Error(xhr.statusText))
        }
      }
    }
    xhr.onerror = function () {
      reject(new Error('Network Error'))
    }
    xhr.send(params)
  })
}

// 封装POST请求
export function postAction (url, data, callback) {
  url = baseUrl + url
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.open('POST', url, true)
    xhr.setRequestHeader('Content-Type', 'application/json')
    if (accessToken) {
      xhr.setRequestHeader('access_token', accessToken)
    }

    xhr.onreadystatechange = function () {
      // console.log(xhr);
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          // alert(200)
          const data = JSON.parse(xhr.responseText)
          typeof callback === 'function' ? callback(data) : setApsMsg(data)

          resolve(JSON.parse(xhr.responseText))
        } else {
          reject(new Error(xhr.statusText))
        }
      }
    }
    xhr.onerror = function () {
      reject(new Error('Network Error'))
    }
    xhr.send(JSON.stringify(data))
  })
}

// 请求异常弹出提示
function setApsMsg (res) {
  if (res.code !== 0) {
    // 登录过期/异常
    if (res.code === 1001) {
      // window.ApsMsg(res.msg, { time: 1200, icon: 3 })
      window.ApsMsg({ message: res.msg, type: 'warning' })
      // setTimeout(() => {
      //   window.sessionStorage.clear()
      //   window.location.reload()
      // }, 2000)
    } else if (res.code === 206) {
      window.ApsMsg({ message: res.msg || '失败', type: 'warning' })
    } else {
      window.ApsMsg({ message: res.msg || '失败', type: 'warning' })
    }
  }
}
