<template>
  <div
    class="g-login-bg-box"
    :style="boxBgStyle"
  >
    <div class="u-corner-top-gp">
      <CornerTop
        :startColor="lightColor"
        :endColor="darkColor"
      />
    </div>
    <div class="u-corner-bottom-gp">
      <CornerBottom
        :startColor="darkColor"
        :endColor="lightColor"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { getColorPalette } from './color'
import CornerTop from './components/CornerTop.vue'
import CornerBottom from './components/CornerBottom.vue'
import computeColor from '@/tool/computeColor'

interface Props {
  /** 主题颜色 */
  themeColor: string;
  /** 暗夜模式 */
  darkTheme: boolean
}

const props = defineProps<Props>()

const boxBgStyle = computed(() => {
  const color = computeColor(props.themeColor, 80)
  return {
    backgroundColor: computeColor(color, props.darkTheme ? -10 : 0)
  }
})

const themeColor = computed(() => props.darkTheme ? getColorPalette(props.themeColor, 7) : props.themeColor)
const lightColor = computed(() => getColorPalette(themeColor.value, 3))
const darkColor = computed(() => getColorPalette(themeColor.value, 6))
</script>

<style scoped lang="scss">
.g-login-bg-box {
  width: 100%;
  height: 100%;
  //background-color: var(--el-color-primary-light-5);
}

.u-corner-top-gp {
  position: absolute;
  right: -300px;
  top: -900px;
}

.u-corner-bottom-gp {
  position: absolute;
  left: -200px;
  bottom: -400px;
}
</style>
