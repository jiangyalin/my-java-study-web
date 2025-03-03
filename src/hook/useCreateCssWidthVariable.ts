import { ref, onMounted } from 'vue'
import globalResize from '@/tool/globalResize'

/** 创建css宽度变量 */
const useCreateCssWidthVariable = (boxClassName: string = '') => {
  const relativeWidth = ref<number>(100)

  // 计算
  const compute = () => {
    const boxDom: any = document.querySelector('.' + boxClassName)
    if (!boxDom) return
    relativeWidth.value = boxDom.clientWidth
    boxDom.style.setProperty('--box-width', `${boxDom.clientWidth}px`)
  }

  globalResize().globalResize('useCreateCssWidthVariable', () => {
    compute()
  })

  onMounted(() => {
    compute()
  })

  return relativeWidth
}

export default useCreateCssWidthVariable
