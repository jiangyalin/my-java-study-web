import { ref, onMounted, onUnmounted } from 'vue'

/**
 * @param { Object } element 页面的Dom节点
 * @returns { Boolean } isFullScreen 是否全屏
 * @returns { Function } toggleFullscreen 触发全屏
 */

export default function useFullscreen (element) {
  const isFullScreen = ref(false)

  // 全屏并做兼容性处理
  const enterFullscreen = (el) => {
    if (el) {
      el.style.backgroundColor = '#fff'
      if (el.requestFullscreen) {
        el.requestFullscreen()
      } else if (el.mozRequestFullScreen) { // Firefox
        el.mozRequestFullScreen()
      } else if (el.webkitRequestFullscreen) { // Chrome, Safari and Opera
        el.webkitRequestFullscreen()
      } else if (el.msRequestFullscreen) { // IE/Edge
        el.msRequestFullscreen()
      }
    }
  }

  // 退出全屏并做兼容性处理
  const exitFullscreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen()
    } else if (document.mozCancelFullScreen) { // Firefox
      document.mozCancelFullScreen()
    } else if (document.webkitExitFullscreen) { // Chrome, Safari and Opera
      document.webkitExitFullscreen()
    } else if (document.msExitFullscreen) { // IE/Edge
      document.msExitFullscreen()
    }
  }

  // 判断是否处于全屏状态(含兼容性处理)
  const isDocumentFullscreen = () => {
    const isFull = document.fullscreenElement ||
      document.webkitFullscreenElement ||
      document.mozFullScreenElement ||
      document.msFullscreenElement
    if (isFull) {
      return true
    }
    return false
  }

  // 判断当前屏幕状态
  const judgeScreenStatus = () => {
    if (isDocumentFullscreen()) {
      isFullScreen.value = true
    } else {
      isFullScreen.value = false
    }
  }

  const toggleFullscreen = () => {
    if (isFullScreen.value) {
      exitFullscreen()
    } else {
      enterFullscreen(element.value)
    }
  }

  onMounted(() => {
    window.addEventListener('fullscreenchange', judgeScreenStatus)
  })

  onUnmounted(() => {
    window.removeEventListener('fullscreenchange', judgeScreenStatus)
  })

  return {
    isFullScreen,
    toggleFullscreen
  }
}
