import { ref, onActivated, onDeactivated } from 'vue'

/** 激活状态 */
const useActiveMode = () => {
  /** 激活状态 */
  const isActive = ref<boolean>(false)

  onActivated(() => {
    isActive.value = true
  })

  onDeactivated(() => {
    isActive.value = false
  })

  return isActive
}

export default useActiveMode
