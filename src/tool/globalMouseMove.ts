/** 全局鼠标移动事件 */
interface GlobalMouseMove {
  /** 主键key */
  id: string | number,
  /** 回调函数 */
  callback: Function
}

const globalMouseMoveArr: GlobalMouseMove[] = []
const el = document.querySelector('#app') as HTMLElement
el.onmousemove = (event: any) => {
  globalMouseMoveArr.forEach(item => {
    item.callback(event)
  })
}
const globalMouseMove = () => {
  const enrollGlobalMouseMove = (id: string | number, callback: Function = () => {}) => {
    if (globalMouseMoveArr.find(item => item.id === id)) return
    globalMouseMoveArr.push({ id, callback })
  }
  const deleteGlobalMouseMove = (id: string | number) => {
    globalMouseMoveArr.splice(globalMouseMoveArr.findIndex(item => item.id === id), 1)
  }

  return {
    enrollGlobalMouseMove,
    deleteGlobalMouseMove
  }
}

export default globalMouseMove
