import { computed } from 'vue'
import { useRoute } from 'vue-router'

/** 表单标识（当表单翻页是变化） */
const useFormPageMark = () => {
  const route = useRoute()

  /** 表单标识 */
  const formPageMark = computed(() => {
    return (route.query?.mark || '') + '-' + (route.query?.pageTurnType || '') + '-' + (route.query?.formId || '')
  })

  return formPageMark
}

export default useFormPageMark
