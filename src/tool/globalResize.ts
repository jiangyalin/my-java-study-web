/** 全局窗口大小变化事件 */
interface GlobalResizeArr {
  /** 主键key */
  id: string | number,
  /** 回调函数 */
  callback: Function
}

const globalResizeArr: GlobalResizeArr[] = []
window.onresize = () => {
  globalResizeArr.forEach(item => {
    item.callback()
  })
}
const globalResize = () => {
  const globalResize = (id: string | number, callback: Function = () => {}) => {
    if (globalResizeArr.find(item => item.id === id)) return
    globalResizeArr.push({ id, callback })
  }
  const deleteGlobalResize = (id: string | number) => {
    globalResizeArr.splice(globalResizeArr.findIndex(item => item.id === id), 1)
  }

  return {
    globalResize,
    deleteGlobalResize
  }
}

export default globalResize
