import { watch, nextTick } from 'vue'
import useFormPageMark from '@/hook/useFormPageMark'
// import useFormMode from '@/hook/useFormMode'
import useActive from '@/hook/useActive'

/** 表单翻页钩子 */
const useFormToPage = (callback: Function) => {
  const formPageMark = useFormPageMark()
  // const { isEditMode, isInfoMode } = useFormMode(name)
  const isActive = useActive()

  watch(
    () => formPageMark.value,
    () => {
      nextTick(() => {
        // if ((isEditMode.value || isInfoMode.value) && isActive.value) callback()
        if (isActive.value) callback()
      })
    }
  )
}

export default useFormToPage
