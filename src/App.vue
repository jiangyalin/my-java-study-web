<template>
  <router-view></router-view>
</template>

<script setup lang="ts">
import { watch, ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import api from '@/api'
import Cookies from 'js-cookie'
import { ElMessage } from 'element-plus'
import config, { envType } from '@/config'
import { useSkinStore } from '@/stores/skin/counter'
const skinStore = useSkinStore()
const childTablePaddingLeft = ref(skinStore.tableSelectionWidth)

watch(() => skinStore.tableSelectionWidth, (newValue) => {
  childTablePaddingLeft.value = newValue + 30 // 手动更新 childTable
  // 将 childTablePaddingLeft 转换为 CSS 变量 并且更新
  document.documentElement.style.setProperty('--child-table-padding-left', `${childTablePaddingLeft.value}px`)
})

const router = useRouter()
const route = useRoute()

const checkLogin = () => {
  const token = Cookies.get('token')
  // const menuData: any[] = JSON.parse(localStorage.getItem('menuData') || '[]') || []
  //  || !menuData.length
  if (!token) router.push({ path: '/login', query: { redirect: router.fullPath } })
}

let itAliveStatus: boolean = false
// ws保活
const wsKeepItAlive = () => {
  if (config.env === envType.DEV) return false
  itAliveStatus = true
  const path = config.serverApi + '/websocket/connect?token=' + Cookies.get('token')
  const ws = new WebSocket(path)
  ws.onopen = () => {
    setInterval(async () => {
      ws.send('ping')
    }, 10 * 1000)
  }
  // ws.onmessage = (res) => {
  //   console.log('res', res)
  // }
  ws.onclose = () => {
    stayConnected()
  }
}

// 保持连接
const stayConnected = () => {
  // 开发模式下不启用
  if (config.env === envType.DEV) return false
  setInterval(async () => {
    if (route.path === '/login') return false
    const res = await api.login.postLoginKeepalive()
    if (res.data !== 'logout') return false
    ElMessage.warning('服务端重启或您已被强制下线，即将返回登录')
    setTimeout(() => {
      Cookies.remove('token')
      window.location.reload()
    }, 1000)
  }, 10 * 1000)
}

checkLogin()
watch(
  () => route.path,
  () => {
    if (route.path === '/login') return false
    checkLogin()
    if (!itAliveStatus) wsKeepItAlive()
  }
)
onMounted(() => {
  document.documentElement.style.setProperty('--child-table-padding-left', `${childTablePaddingLeft.value}px`)
})
</script>

<style scoped lang="scss">
</style>

<style lang="scss">
@import "./style/index.scss";

</style>
