<template>
  <div
    class="g-menu-box"
    :data-mini-mode="isCollapse"
  >
    <div class="u-logo-box">
      <el-icon class="u-logo">
        <img
          class="u-logo"
          src="@/assets/logo.svg"
        />
      </el-icon>
      <p class="u-p">上海宝陆</p>
    </div>
    <el-menu
      :defaultActive="activeKey"
      class="m-menu"
      @select="select"
      :collapse="isCollapse"
      :collapseTransition="false"
    >
      <div
        class="u-li"
        v-for="item in menu"
        :key="item.id"
      >
        <MenuItem
          :title="item.title"
          :id="item.id"
          :icon="item.icon"
          :path="item.path"
          :name="item.name"
          :code="item.code"
          :isHid="item.isHid"
          :children="item.children"
        ></MenuItem>
      </div>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import bus from '@/tool/bus'
import Cookies from 'js-cookie'
import traverseTree from '@/tool/traverseTree'
import type { MenuItemType } from '@/components/navigate/menuItemType'
import type { SysuserUserauthdataResType } from '@/api/sysuser'
import MenuItem from '@/components/navigate/MenuItem.vue'

type ApiData = SysuserUserauthdataResType['data']['Menus']

// 激活菜单
const activeKey = ref('')
const rawMenu = ref<MenuItemType[]>([])
const menu = ref<MenuItemType[]>([])
const route = useRoute()

// const menuPathToIdMap = ref<{ [key: string]: string }>({})

watch(
  () => route.path,
  (newPath: string) => {
    generateMenu(newPath)

    const data = menuPathMap.value[route.path]
    if (!data?.isHid) activeKey.value = data?.id || ''
    if (data.isHid) {
      const code = menuIdMap.value[data.id].code || ''
      const activeCode = code.substring(code.indexOf('_') + 1)
      activeKey.value = menuCodeMap.value[activeCode]?.id || ''
    }
  }
)

const generateMenu = (path: string) => {
  const menuData: ApiData = JSON.parse(localStorage.getItem('menuData') || '[]')

  let appId = ''

  if (!menuData) return
  traverseTree(menuData, item => {
    if (item.path === path) appId = item.appId || ''
  })

  const appMenuData = menuData.filter(item => item.appId === appId)

  /**
   * @description 映射树
   * @param tree 树
   * @param isFilter 是否过滤隐藏菜单
   * */
  const treeMap = (tree: ApiData = [], isFilter: boolean = false): MenuItemType[] => {
    return tree.filter(item => (!item.isHid || !isFilter) && !item.isBtn).map(item => {
      return {
        title: item.title || '',
        id: item.id || '',
        icon: item.icon || '',
        path: item.path || '',
        name: item.code || '',
        code: item.code || '',
        isHid: Boolean(item.isHid),
        children: item.children ? treeMap(item.children, isFilter) : []
      }
    })
  }

  menu.value = treeMap(appMenuData, true)

  rawMenu.value = treeMap(appMenuData)
}

generateMenu(route.path)

onMounted(async () => {
  const data = menuPathMap.value[route.path]
  if (!data?.isHid) activeKey.value = data?.id || ''
  if (data?.isHid) {
    const code = menuIdMap.value[data.id].code || ''
    const activeCode = code.substring(code.indexOf('_') + 1)
    activeKey.value = menuCodeMap.value[activeCode]?.id || ''
  }
})

const menuIdMap = computed(() => {
  const data: { [key: string]: MenuItemType } = {}
  traverseTree<MenuItemType>(rawMenu.value, (item) => {
    data[item.id] = item
  })

  return data
})
const menuPathMap = computed(() => {
  const data: { [key: string]: MenuItemType } = {}
  traverseTree<MenuItemType>(rawMenu.value, (item) => {
    data[item.path] = item
  })
  return data
})
const menuCodeMap = computed(() => {
  const data: { [key: string]: MenuItemType } = {}
  traverseTree<MenuItemType>(rawMenu.value, (item) => {
    data[item.code || ''] = item
  })
  return data
})

const router = useRouter()

const select = (index: any) => {
  const path = menuIdMap.value[index].path

  if (!path) return false

  if (!path.includes('http')) return router.push(path)

  if (menuIdMap.value[index].name === 'ProcessDesign') {
    const url = path + '?token=' + Cookies.get('token')
    return window.open(url)
  }
  return window.open(path)
}

/* 切换菜单暂开与折叠模式 */
const isCollapse = ref<boolean>(false)
bus.on('switchMenuMode', (mode) => {
  isCollapse.value = mode !== 'default'
})
</script>

<style scoped lang="scss">
.g-menu-box {
  width: 230px;
  min-width: 230px;
  background-color: var(--el-bg-color);
  box-shadow: 2px 0 8px #1d23290d;

  &[data-mini-mode='true'] {
    width: 63px;
    min-width: 0;

    .u-logo-box {
      padding-left: 0;
      padding-right: 0;
      width: 63px;

      .u-logo {
        margin-right: 0;
      }

      .u-p {
        display: none;
      }
    }
  }
}

.g-menu-box {
  .m-menu {
    position: relative;
    //overflow: hidden;
    overflow-y: auto;
    z-index: 1;
    width: 230px;
    height: calc(100% - 56px);
    min-width: 230px;
    border-right: 0;
    //transition: .3s 1s;
  }

  &[data-mini-mode='true'] .m-menu {
    width: 63px;
  }
}

.u-logo-box {
  display: flex;
  padding: 5px 12px;
  width: 100%;
  height: 56px;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;

  .u-logo {
    margin-right: 12px;
    height: 60%;
    font-size: 48px;
    color: var(--el-color-primary);
  }

  .u-p {
    font-weight: 800;
    font-size: 18px;
    color: #0000;
    -webkit-background-clip: text;
    background-image: linear-gradient(252deg, var(--el-color-primary-light-7) 0%, var(--el-color-primary) 100%);
  }
}
</style>

<style lang="scss">
.g-menu-box .m-menu {
  .u-li,
  .el-sub-menu .el-menu-item {
    margin-top: 6px;
  }

  .el-sub-menu__title,
  .el-menu-item,
  .el-sub-menu .el-menu-item {
    height: 42px;
  }

  .u-li {
    margin: 0 0;
    width: 224px;
    //transition: .3s 1s;
  }

  .el-menu-item {
    border-radius: 3px;

    &.is-active {
      background-color: var(--el-menu-hover-bg-color);
    }

    &:hover {
      background-color: var(--el-menu-hover-bg-color);
    }
  }

  .el-menu-item-group__title {
    display: none;
  }
}

.g-menu-box[data-mini-mode='true'] .m-menu {
  min-width: 0;

  .u-li {
    width: 63px;

    .u-sn {
      display: none;
      opacity: 0;
    }

    .el-sub-menu__icon-arrow {
      display: none;
      opacity: 0;
    }
  }
}

.el-menu-item-group__title{
  padding: 0;
}
</style>
