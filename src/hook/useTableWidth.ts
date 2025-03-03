import { computed, ref } from 'vue'
import type { Ref } from 'vue'
import checkType from '@/tool/checkType'

/** 获取表格宽度 */
const useTableWidth = (tableTitle: Ref<TableTitle[]> = ref([])): {
  style: Ref<{
    width: string
  }>,
  width: Ref<number | string>
} => {
  const getPxSize = (size: number | string): number => {
    return checkType.isNumber(size) ? size as number : Number((size as string).replace(/px/g, ''))
  }
  const width = computed(() => tableTitle.value.map(item => item.minWidth || 0).reduce((total, current) => getPxSize(total) + getPxSize(current), 0))
  const style: Ref<{
    width: string
  }> = computed(() => ({
    width: width.value + 'px'
  }))
  return {
    style,
    width
  }
}

export default useTableWidth
