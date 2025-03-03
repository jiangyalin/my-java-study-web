import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import { createPinia } from 'pinia'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import App from './App.vue'
import 'element-plus/dist/index.css'
import './style/elementVariables.scss'
import router from './router'
import directive from '@/directive'

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
