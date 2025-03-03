<template>
  <m-dialog
    class="m-dialog"
    v-model="visible"
    title="app下载"
    dataCover
    resize
    draggable
    width="300px"
  >
    <div
      class="g-box g-app-info-box"
      v-loading="loading"
    >
      <p class="u-p">扫码下载应用</p>
      <div class="u-qr-code-box">
        <canvas
          class="u-qr-code"
          id="canvas"
        ></canvas>
        <img
          class="u-logo"
          src="./../../public/favicon.ico"
        />
      </div>
      <el-link
        type="primary"
        class="u-sn"
        @click="downApp"
      >
        {{ version }}
      </el-link>
    </div>
  </m-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import api from '@/api'
import QRCode from 'qrcode'
import { useSkinStore } from '@/stores/skin/counter'
const skinStore = useSkinStore()

const loading = ref<boolean>(true)
const visible = ref<boolean>(false)
const version = ref<string>('')
const href = ref<string>('')

const open = () => {
  visible.value = true
  loading.value = true
  api.publicApi.postPublicAppupgrade({
    Version: ''
  }).then(res => {
    href.value = res.data?.PkgSrc || ''

    const canvas = document.getElementById('canvas')
    if (!canvas) return
    QRCode.toCanvas(canvas, href.value, {
      color: {
        dark: skinStore.primaryColor
        // light: skinStore.darkTheme ? '#000000ff' : '#ffffffff'
      }
    })
    version.value = res.data.Version || ''
  }).finally(() => {
    loading.value = false
  })
}

const downApp = () => {
  window.open(href.value)
}

defineExpose({
  open
})
</script>

<style scoped lang="scss">
.g-app-info-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--el-color-primary);
}

.u-qr-code-box {
  position: relative;
  width: 148px;

  .u-logo {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 30px;
    height: 30px;
    transform: translate(-50%, -50%);
    background-color: #fff;
    border-radius: 5px;
  }
}
</style>

<style lang="scss">
.g-app-info-box {
  .u-sn.el-link.is-underline:after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    height: 0;
    bottom: 0;
    border-bottom: 1px solid var(--el-color-primary);
  }
}
</style>
