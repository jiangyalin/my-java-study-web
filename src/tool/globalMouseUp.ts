/** 全局鼠标抬起事件 */
interface GlobalMouseUp {
  /** 主键key */
  id: string | number,
  /** 回调函数 */
  callback: Function
}

const globalMouseUpArr: GlobalMouseUp[] = []
const el = document.querySelector('#app') as HTMLElement
el.onmouseup = (event: any) => {
  globalMouseUpArr.forEach(item => {
    item.callback(event)
  })
}
const globalMouseUp = () => {
  const enrollGlobalMouseUp = (id: string | number, callback: Function = () => {}) => {
    if (globalMouseUpArr.find(item => item.id === id)) return
    globalMouseUpArr.push({ id, callback })
  }
  const deleteGlobalMouseUp = (id: string | number) => {
    globalMouseUpArr.splice(globalMouseUpArr.findIndex(item => item.id === id), 1)
  }

  return {
    enrollGlobalMouseUp,
    deleteGlobalMouseUp
  }
}

export default globalMouseUp
