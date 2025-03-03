import { ref, onMounted, onUnmounted, watch } from 'vue'
import globalMouseMove from '@/tool/globalMouseMove'
import globalMouseUp from '@/tool/globalMouseUp'
import globalResize from '@/tool/globalResize'
import bus from '@/tool/bus'
import { useRoute } from 'vue-router'
import { usePackageConfig } from 'br-dionysus'
const packageConfig = usePackageConfig()
/**
 * 实现左右宽度拖动
 * @param uBoxRef 父盒子的 ref
 * @param lineWidth 中间拖动线的宽度 (内外边距合计)
 * @param eventAndLocalName 全局事件名称
 * @param leftMinWidth 左边盒子最小的宽度
 * @param rightMinWidth 右边盒子的最小宽度
 */
const useDragSideToSide = (uBoxRef:any, lineWidth:number, eventAndLocalName:string, leftMinWidth:number = 280, rightMinWidth:number = 300) => {
  const route = useRoute()
  const isDragging = ref<boolean>(false) // 是否开启拖动
  const leftWidth = ref<string>('500px') // 初始的左盒子宽度
  const rightWidth = ref<string>('500px') // 初始的右盒子宽度
  let containerWidth = 0 // 盒子的宽度
  let uboxLeft = 0
  const getElementLeft = (element: HTMLElement) => {
    let left = element.offsetLeft// 当前元素左边距
    let parent = element.offsetParent// 当前元素的父级元素
    while (parent !== null) {
      left += (parent as HTMLDivElement).offsetLeft// 累加左边距
      parent = (parent as HTMLDivElement).offsetParent// 依次获取父元素
    }
    return left
  }

  const mousedownDiv = () => {
    isDragging.value = true
    uboxLeft = getElementLeft(uBoxRef.value)// 获取盒子距离左边的全部间距
  }
  const drag = (e: MouseEvent) => {
    if (!isDragging.value) return
    const offset = e.clientX // 鼠标的位置
    const newLeftWidth = offset - uboxLeft - (lineWidth / 2)
    const newRightWidth = containerWidth - newLeftWidth - (lineWidth / 2)
    if (newLeftWidth <= leftMinWidth) return
    if (newRightWidth <= rightMinWidth) return
    leftWidth.value = `${newLeftWidth}px`
    rightWidth.value = `${newRightWidth}px`
  }

  const stopDrag = () => {
    if (isDragging.value) {
      packageConfig.set(`${eventAndLocalName}-Left`, leftWidth.value)
      packageConfig.set(`${eventAndLocalName}-Right`, rightWidth.value)
    }
    isDragging.value = false
  }
  const initFun = (str:string = '') => {
    containerWidth = uBoxRef.value.offsetWidth
    const num = 146 / 2
    let left = ''
    let right = ''
    if (typeof packageConfig.get(`${eventAndLocalName}-Left`) === 'object') {
      left = `${(containerWidth / 2) - (lineWidth / 2)}px`
      right = `${(containerWidth / 2) - (lineWidth / 2)}px`
    } else {
      const leftNum = (packageConfig.get(`${eventAndLocalName}-Left`) as string).split('px')
      // const rightNum = (packageConfig.get(`${eventAndLocalName}-Right`) as string).split('px')
      if (str === 'mini') {
        left = Number(leftNum[0]) + num + 'px'
        right = (containerWidth - Number(leftNum[0])) + num + 'px'
      } else {
        left = Number(leftNum[0]) + 'px'
        right = containerWidth - Number(leftNum[0]) + 'px'
      }
    }
    leftWidth.value = left
    rightWidth.value = right
  }
  bus.on('switchMenuMode', (val) => {
    setTimeout(() => {
      initFun(val as string)
    }, 50)
  })
  onMounted(() => {
    watch(() => uBoxRef.value, () => {
      initFun()
    })
    if (uBoxRef.value) {
      initFun()
    }
    globalMouseMove().enrollGlobalMouseMove(route.path + eventAndLocalName + 'Move', drag)
    globalMouseUp().enrollGlobalMouseUp(route.path + eventAndLocalName + 'Up', stopDrag)
    globalResize().globalResize('useDragSideToSide', () => {
      initFun()
    })
  })
  onUnmounted(() => {
    globalMouseMove().deleteGlobalMouseMove(route.path + eventAndLocalName + 'Move')
    globalMouseUp().deleteGlobalMouseUp(route.path + eventAndLocalName + 'Up')
    globalResize().deleteGlobalResize('useDragSideToSide')
  })
  return {
    mousedownDiv,
    leftWidth,
    rightWidth
  }
}
export default useDragSideToSide
