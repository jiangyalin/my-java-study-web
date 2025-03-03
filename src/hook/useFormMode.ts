import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'

/** 表单状态 */
const useFormMode = ({ addPath, editPath, infoPath }: { addPath: string, editPath: string, infoPath: string }) => {
  const router = useRouter()

  /** 新增状态 */
  const isAddMode = ref<boolean>(router.currentRoute.value.path === addPath)
  /** 编辑状态 */
  const isEditMode = ref<boolean>(router.currentRoute.value.path === editPath)
  /** 详情状态 */
  const isInfoMode = ref<boolean>(router.currentRoute.value.path === infoPath)

  watch(
    () => router.currentRoute.value.fullPath,
    () => {
      isAddMode.value = router.currentRoute.value.path === addPath
      isEditMode.value = router.currentRoute.value.path === editPath
      isInfoMode.value = router.currentRoute.value.path === infoPath
    }
  )

  return {
    isAddMode,
    isEditMode,
    isInfoMode
  }
}

export default useFormMode
