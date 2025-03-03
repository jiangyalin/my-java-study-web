<template>
  <div class="g-tab-page-box">
    <el-tabs
      v-model="activeKey"
      @mouseleave="hoverKey = -1"
    >
      <el-tab-pane
        v-for="item in list"
        :key="item.key"
        :label="item.title"
        :name="item.key"
      >
        <template #label>
          <div
            class="u-li"
            v-context-menu="contextMenuConfig"
            :data-active="activeKey === item.key"
            :data-active-before="activeBeforeKey === item.key"
            :data-active-after="activeAfterKey === item.key"
            @mouseenter="hoverKey = item.key"
            :data-hover="hoverKey === item.key"
            :data-hover-before="hoverBeforeKey === item.key"
            :data-hover-after="hoverAfterKey === item.key"
            @click="openPage(item.key)"
          >
            <div class="u-gp">
              <el-icon class="u-icon">
                <component :is="item.icon"></component>
              </el-icon>
              <span class="u-sn">{{ item.title }}</span>
              <el-icon
                class="u-btn"
                @click.stop="close([item.key]);openPage(activeKey)"
              >
                <Close />
              </el-icon>
            </div>
          </div>
        </template>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import createHash from '@/tool/createHash'
import bus from '@/tool/bus'
import useRouteCache from '@/hook/useRouteCache'
import type { Menu } from '@/interface/type'
import hashShorten from '@/tool/hashShorten'

const router = useRouter()

interface TabPage {
  icon: string,
  key: string,
  title: string,
  fullPath: string,
  cacheKey: string
}

/** 返回并关闭当前页签 */
bus.on('returnMoreoverCloseTabPage', () => {
  close([activeKey.value])
  openPage(activeKey.value)
})
/** 跳转并关闭当前页签 */
bus.on('jumpAndClose', (path: any) => {
  router.push(path)
  const _activeKey = activeKey.value
  setTimeout(() => {
    close([_activeKey])
  }, 300)
})
/** 根据path关闭 */
bus.on('closePath', (path: any) => {
  const key = list.value.filter(item => {
    const url = new URL('http://www.test.test' + item.fullPath)
    const _path = url.pathname
    return _path === path
  }).map(item => item.key)
  close(key)
})

const contextMenuConfig = [{
  title: '关闭当前',
  callback () {
    close([activeKey.value])
    openPage(activeKey.value)
  }
}, {
  title: '关闭其他',
  callback () {
    const keys = list.value.filter((item: TabPage) => item.key !== activeKey.value).map((item: TabPage) => item.key)
    close(keys)
  }
}, {
  title: '关闭右侧',
  callback () {
    const keys = list.value.slice(list.value.findIndex(item => item.key === activeKey.value) + 1).map(item => item.key)
    close(keys)
  }
}, {
  title: '关闭左侧',
  callback () {
    const keys = list.value.slice(0, list.value.findIndex(item => item.key === activeKey.value)).map(item => item.key)
    close(keys)
  }
}]

const { removeCache } = useRouteCache()
// 关闭标签页
const close = (keys: string[] = []) => {
  const size = list.value.length
  if (size <= 1) return ElMessage.warning('最后一个标签页，不允许关闭')

  const closeFullPathList: string[] = list.value.filter(item => keys.includes(item.key)).map(item => item.cacheKey)
  bus.emit('close', closeFullPathList)

  removeCache(closeFullPathList)
  list.value = list.value.filter((item: TabPage) => !keys.includes(item.key))
  if (keys.includes(activeKey.value)) activeKey.value = list.value[list.value.length - 1].key
}

// 打开标签页
const openPage = (key: string) => {
  const fullPath = list.value.find(item => item.key === key)?.fullPath
  if (!fullPath) return false
  router.push(fullPath)
}

const list = ref<TabPage[]>([])
const route = useRoute()

const cacheKey = computed(() => route.path + '-' + route.query.mark)

watch(
  cacheKey,
  () => {
    const node = menuPathMap[route.path]
    if (!node) return false
    if (list.value.some((item: TabPage) => item.fullPath === route.fullPath)) return false
    const tabPage: TabPage = {
      icon: node?.icon,
      key: createHash(),
      title: node?.title,
      fullPath: route.fullPath,
      cacheKey: hashShorten(route.path + route.query.mark)
    }
    list.value.push(tabPage)
  }
)

const activeKey: any = ref(-1)
watch(
  cacheKey,
  () => {
    if (!menuPathMap[route.path]) return false
    activeKey.value = list.value.find((item: TabPage) => item.fullPath === route.fullPath)?.key
  }
)
const activeBeforeKey = computed(() => {
  const index = list.value.findIndex(item => item.key === activeKey.value)
  if (index === -1) return -1
  return list.value[index - 1]?.key
})
const activeAfterKey = computed(() => {
  const index = list.value.findIndex(item => item.key === activeKey.value)
  if (index === -1) return -1
  return list.value[index + 1]?.key
})

const hoverKey: any = ref(2)
const hoverBeforeKey = computed(() => {
  const index = list.value.findIndex(item => item.key === hoverKey.value)
  if (index === -1) return -1
  return list.value[index - 1]?.key
})
const hoverAfterKey = computed(() => {
  const index = list.value.findIndex(item => item.key === hoverKey.value)
  if (index === -1) return -1
  return list.value[index + 1]?.key
})

const menuPathMap: { [key: string]: any } = {}
onMounted(async () => {
  const menuData: any = JSON.parse(localStorage.getItem('menuData') || '[]') || []

  const treeTraverse = (tree: Menu[], callback: Function) => {
    tree.forEach((item: Menu) => {
      callback(item)
      treeTraverse(item.children || [], callback)
    })
  }

  treeTraverse(menuData, (node: Menu) => {
    menuPathMap[node.path] = node
  })

  const node = menuPathMap[route.path]
  if (node) {
    const tabPage: TabPage = {
      icon: node?.icon,
      key: createHash(),
      title: node?.title,
      fullPath: route.fullPath,
      cacheKey: hashShorten(route.path + route.query.mark)
    }
    list.value.push(tabPage)
  }

  activeKey.value = list.value.find((item: TabPage) => item.fullPath === route.fullPath)?.key
})
</script>

<style scoped lang="scss">
.u-test {
  max-width: 200px;
}

.g-tab-page-box {
  padding-top: 11px;
  padding-left: 16px;
  height: 44px;
  color: var(--m-fc-body);
  background-color: var(--el-bg-color);
  box-sizing: border-box;
  box-shadow: 2px 0 8px #1d23290d;

  .u-li {
    position: relative;
    height: 33px;
    font-size: var(--m-fs-body);
    box-sizing: border-box;
    cursor: pointer;

    .u-gp {
      display: flex;
      position: relative;
      z-index: 1;
      padding: 6px 8px;
      height: 100%;
      align-items: center;
      background-color: var(--el-bg-color);
      border-radius: 6px 6px 0 0;
      box-sizing: border-box;

      &:after {
        position: absolute;
        bottom: 0;
        right: 0;
        z-index: 1;
        content: '';
        width: 12px;
        height: 12px;
        border-radius: 6px 6px 0 6px;
        pointer-events: none;
      }

      &:before {
        position: absolute;
        bottom: 0;
        left: 0;
        z-index: 1;
        content: '';
        width: 12px;
        height: 12px;
        border-radius: 6px 6px 6px 0;
        pointer-events: none;
      }
    }

    &:after {
      position: absolute;
      bottom: 0;
      right: 0;
      z-index: 2;
      content: '';
      width: 12px;
      height: 12px;
      border-radius: 6px;
      pointer-events: none;
    }

    &:before {
      position: absolute;
      bottom: 0;
      left: 0;
      z-index: 2;
      content: '';
      width: 12px;
      height: 12px;
      border-radius: 6px;
      pointer-events: none;
    }

    /*hover*/
    &[data-hover="true"] {
      .u-gp, .u-gp:after, .u-gp:before, &[data-active="false"]:after, &[data-active="false"]:before {
        background-color: var(--m-box-padding-color);
      }
    }

    &[data-hover-before="true"] {
      .u-gp:after {
        background-color: var(--m-box-padding-color);
      }

      &:after {
        background-color: var(--el-bg-color);
      }
    }

    &[data-hover-after="true"] {
      .u-gp:before {
        background-color: var(--m-box-padding-color);
      }

      &:before {
        background-color: var(--el-bg-color);
      }
    }

    /*激活*/
    &[data-active-before="true"] {
      .u-gp:after {
        background-color: var(--el-color-primary-light-9);
      }

      &:after {
        background-color: var(--el-bg-color);
      }
    }

    &[data-active-after="true"] {
      .u-gp:before {
        background-color: var(--el-color-primary-light-9);
      }

      &:before {
        background-color: var(--el-bg-color);
      }
    }

    &[data-active="true"] {
      color: var(--el-color-primary);

      .u-gp, .u-gp:before, .u-gp:after, &:after, &:before {
        background-color: var(--el-color-primary-light-9);
      }
    }

    .u-icon {
      margin-right: 14px;
      pointer-events: none;
    }

    .u-sn {
      pointer-events: none;
      //white-space: normal;
    }

    .u-btn {
      position: relative;
      margin-left: 14px;
      width: 14px;
      height: 14px;
      font-size: 14px;
      border-radius: 50%;

      &:after {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        width: 100%;
        height: 100%;
        content: '';
        border-radius: 50%;
      }

      &:hover {
        color: #fff;
        background-color: #9ca3af;
      }
    }

    &[data-active="true"] .u-btn:hover {
      color: var(--el-bg-color);
      background-color: var(--el-color-primary);
    }

    &[data-active="false"][data-hover="false"][data-active-before="false"][data-hover-before="false"] .u-sn:after {
      position: absolute;
      top: 50%;
      right: 0;
      z-index: 2;
      content: '';
      width: 1px;
      height: 50%;
      transform: translateY(-50%);
      background-color: var(--m-fc-body);
    }

    //&[data-active="false"][data-hover="false"]:nth-last-of-type(1) .u-sn:after {
    //  background-color: rgba(0, 0, 0, 0) !important;
    //}
  }
}
</style>

<style lang="scss">
.g-tab-page-box {
  .el-tabs__header {
    margin-bottom: 0;
  }

  .el-tabs__item {
    padding: 0 !important;
    height: auto;
  }

  .el-tabs__active-bar {
    display: none;
  }

  //.el-tabs__item.is-active {
  //  color: inherit;
  //}

  .el-tabs__nav-wrap:after {
    opacity: 0;
  }

  .el-tabs__item:nth-last-of-type(1) .u-li[data-active="false"][data-hover="false"] .u-sn:after {
    background-color: rgba(0, 0, 0, 0) !important;
  }
}
</style>
