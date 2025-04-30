import { createApp } from 'vue'
import ElementPlus, { useZIndex } from 'element-plus'
import { createPinia } from 'pinia'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import App from './App.vue'
import 'element-plus/dist/index.css'
import './style/elementVariables.scss'
import router from './router'
import directive from '@/directive'
import {
  MInline,
  MInputNumber,
  MSelectTable,
  MTable,
  MTableColumn,
  MTableColumnSet,
  MSelect,
  MOption,
  useGlobalZIndex,
  MDialog,
  useMTableColumnSet
} from 'br-dionysus'

const zIndex = useZIndex()
useGlobalZIndex(zIndex)
const mTableColumnSet = useMTableColumnSet()
mTableColumnSet.setConfig('/System/config', router)

const app = createApp(App)

directive(app)

app.use(ElementPlus, {
  locale: zhCn
})
app.use(router)
app.use(createPinia())

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.component('MInputNumber', MInputNumber)
app.component('MSelectTable', MSelectTable)
app.component('MTable', MTable)
app.component('MInline', MInline)
app.component('MTableColumn', MTableColumn)
app.component('MTableColumnSet', MTableColumnSet)
app.component('MSelect', MSelect)
app.component('MOption', MOption)
app.component('MDialog', MDialog)
app.directive('hasBtnPermission', {
  mounted (el, binding) {
    const permissionsString = localStorage.getItem('buttonPermissions')
    const myBtns = permissionsString ? JSON.parse(permissionsString) : []
    const permissions = Array.isArray(binding.value) ? binding.value : [binding.value]

    if (!permissions.some(p => myBtns.includes(p))) {
      el.style.display = 'none'
    }
  }
})
app.mount('#app')
