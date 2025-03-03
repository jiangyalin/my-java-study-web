import { ElMessageBox } from 'element-plus'
import Cookies from 'js-cookie'

/**
 * @description 退出登录
 * @param {string} text 提示文本
 * @returns {Promise}
 */
const signOut = (text: string = ''): Promise<boolean> => {
  const _text: string = text || '是否确定退出登录?'
  return new Promise((resolve) => {
    ElMessageBox.confirm(
      _text,
      '警告',
      {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }
    )
      .then(() => {
        Cookies.remove('token')
        window.location.reload()
        resolve(true)
      })
      .catch(() => {
        if (_text !== '是否确定退出登录?') {
          Cookies.remove('token')
          window.location.reload()
          resolve(true)
        }
      })
  })
}

export default signOut
