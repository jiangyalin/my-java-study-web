// 注册全局指令

// 创建右键菜单
interface MenuConfig {
  title: string,
  callback: Function
}
interface Coordinate {
  x: number,
  y: number
}
const createContextMenuDom = (menuConfig: MenuConfig[], coordinate: Coordinate) => {
  const ul: HTMLUListElement = document.createElement('ul')
  ul.setAttribute('class', 'm-context-menu j-context-menu')
  ul.style.left = `${coordinate.x}px`
  ul.style.top = `${coordinate.y}px`

  menuConfig.forEach((item: MenuConfig) => {
    const li: HTMLLIElement = document.createElement('li')
    li.textContent = item.title
    li.setAttribute('class', 'u-li')

    li.addEventListener('click', () => {
      item.callback()
      const masked: HTMLDivElement = <HTMLDivElement>document.querySelector('.j-context-menu-masked')
      masked.click()
    })

    ul.appendChild(li)
  })

  return ul
}

const directive = (app: any) => {
  // 右键菜单指令
  app.directive('context-menu', {
    mounted (el: HTMLFormElement, binding: any) {
      el.oncontextmenu = (e: MouseEvent) => {
        const dom: HTMLFormElement | null = document.querySelector('.j-context-menu')
        if (dom) dom.remove()
        const body: HTMLBodyElement | null = document.querySelector('body')
        if (!body) return false

        const newDom: HTMLDivElement = document.createElement('div')
        body.appendChild(newDom)

        newDom.appendChild(createContextMenuDom(binding.value, { x: e.clientX, y: e.clientY }))

        const masked: HTMLDivElement = document.createElement('div')
        masked.className = 's-context-menu-masked j-context-menu-masked'
        masked.onclick = () => {
          newDom.remove()
        }
        newDom.appendChild(masked)

        e.preventDefault()
      }
    }
  })
}

export default directive
