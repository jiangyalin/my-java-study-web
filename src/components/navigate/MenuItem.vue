<template>
  <div>
    <el-sub-menu
      :index="props.id"
      v-if="props.children.length"
    >
      <template
        #title
        v-if="props.title"
      >
        <el-icon v-if="props.icon">
          <component :is="props.icon"></component>
        </el-icon>
        <span class="u-sn">{{ props.title }}</span>
      </template>
      <MenuItem
        v-for="item in props.children"
        :key="item.id"
        :title="item.title"
        :id="item.id"
        :icon="item.icon"
        :path="item.path"
        :name="item.name"
        :code="item.code"
        :isHid="item.isHid"
        :children="item.children"
      ></MenuItem>
    </el-sub-menu>
    <el-menu-item
      :index="props.id"
      v-if="!props.children.length"
    >
      <el-icon v-if="props.icon">
        <component :is="props.icon"></component>
      </el-icon>
      <span class="u-sn">{{ props.title }}</span>
    </el-menu-item>
  </div>
</template>

<script setup lang="ts">
import type { MenuItemType } from '@/components/navigate/menuItemType'

const props = withDefaults(defineProps<{
  /** 标题 */
  title: string,
  id: string,
  /** 图标 */
  icon: string,
  /** 路由地址 */
  path: string,
  /** 编码（暂同code） */
  name: string,
  /** 编码（暂同name） */
  code: string,
  /** 是否隐藏 */
  isHid: boolean,
  /** 子级 */
  children: MenuItemType[]
}>(), {
  title: '',
  id: '',
  icon: '',
  path: '',
  name: '',
  code: '',
  isHid: false,
  children: () => []
})
</script>

<style scoped lang="scss">

</style>
