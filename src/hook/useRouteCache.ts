import { ref } from 'vue'
import hashShorten from '@/tool/hashShorten'

const caches = ref<string[]>([])

/** 数据持久化的缓存控制 */
const useRouteCache = () => {
  const addCache = (componentName: string) => {
    const _componentName = hashShorten(componentName)
    if (Array.isArray(_componentName)) {
      _componentName.forEach(addCache)
      return
    }

    if (!_componentName || caches.value.includes(_componentName)) return

    caches.value.push(_componentName)
  }

  const removeCache = (componentNames: string[]) => {
    caches.value = caches.value.filter(item => !componentNames.includes(item))
  }

  const clearCache = () => {
    caches.value = []
  }

  return {
    caches,
    addCache,
    removeCache,
    clearCache
  }
}

export default useRouteCache
