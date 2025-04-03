<template>
  <div class="g-main-box">
    <Navigate></Navigate>
    <div class="u-con">
      <Head></Head>
      <div class="u-box">
        <router-view
          class="u-page"
          v-slot="{ Component }"
        >
          <transition
            name="fade-slide"
            mode="out-in"
            :appear="true"
          >
            <component
              :is="Component"
              :key="cacheKey"
            />
          </transition>
        </router-view>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import Head from '@/components/Head.vue'
import Navigate from '@/components/navigate/Navigate.vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const cacheKey = computed(() => route.path + '-' + route.query.mark)
</script>

<style scoped lang="scss">
.g-main-box {
  display: flex;
  width: 100%;
  height: 100%;
  background-color: var(--m-box-padding-color);

  .u-con {
    display: flex;
    flex-direction: column;
    width: calc(100% - 150px);

    &[data-mini="true"] {
      width: calc(100% - 68px);
    }

    .u-box {
      padding: 16px;
      flex: 1;
      height: calc(100% - 55px - 44px);
      box-sizing: border-box;

      .u-page {
        position: relative;
        overflow: auto;
        width: 100%;
        height: 100%;
        background-color: var(--el-bg-color);
        border-radius: 8px;
      }
    }
  }
}
</style>
