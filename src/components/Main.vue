<template>
  <div class="g-main-box">
    <!--<Navigate :appidMenu="appid"></Navigate>-->
    <div
      class="u-con"
      :data-mini="isMini"
    >
      <!--<Head-->
      <!--  v-model="appid"-->
      <!--  @change="changeAppid"-->
      <!--&gt;</Head>-->
      <!--<TabPage></TabPage>-->
      <div class="u-box">
        <router-view
          class="u-page"
          v-slot="{ Component }"
          ref="routerViewRef"
        >
          <transition
            name="fade-slide"
            mode="out-in"
            :appear="true"
          >
            <keep-alive :include="caches">
              <component
                :is="Component"
                :key="cacheKey"
              />
            </keep-alive>
          </transition>
        </router-view>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
// import Head from '@/components/Head.vue'
// import Navigate from '@/components/navigate/Navigate.vue'
// import TabPage from '@/components/TabPage.vue'
import { useRoute } from 'vue-router'
import useRouteCache from '@/hook/useRouteCache'

const { caches } = useRouteCache()

const route = useRoute()

const routerViewRef = ref<any>(null)

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
    //flex: 1;
    width: calc(100% - 230px);

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
        //box-shadow: 0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), var(--un-shadow);
      }
    }
  }
}
</style>
