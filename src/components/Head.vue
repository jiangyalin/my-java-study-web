<template>
  <div class="g-head-box">
    <!-- 暗夜模式 -->
    <div class="dark-div">
      <el-tooltip
        class="box-item"
        effect="dark"
        :content="darkTheme?'白昼模式':'暗夜模式'"
        placement="top-start"
      >
        <span
          v-if="!darkTheme"
          class="custom-active-action"
          @click="changeDark(true)"
        >
          <el-icon><Moon /></el-icon>
        </span>
        <span
          v-if="darkTheme"
          class="custom-inactive-action"
          @click="changeDark(false)"
        >
          <el-icon><Sunny /></el-icon>
        </span>
      </el-tooltip>
    </div>
    <!--皮肤配置-->
    <SkinConfig
      ref="shinConfigRef"
      @change="change"
    ></SkinConfig>

    <el-dropdown>
      <div class="u-user-gp">
        <div class="u-gp">
          <img
            class="u-img"
            src="@/assets/avatar.jpg"
          />
          <!-- <img v-else class="u-img" src="@/assets/chlogo.png" /> -->
          <span class="u-name">{{ nickName }}</span>
        </div>
      </div>
      <template #dropdown>
        <el-dropdown-menu>
          <!-- <el-dropdown-item @click="editUser">用户设置</el-dropdown-item> <el-dropdown-item @click="editPwd">修改密码</el-dropdown-item> -->
          <el-dropdown-item @click="signOut()">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import signOut from '@/hook/signOut'
import Cookies from 'js-cookie'
import config from '@/config'
import { SkinConfig, useSkin } from 'br-dionysus'
import { useSkinStore } from '@/stores/skin/counter'
const skin = useSkin()
const darkTheme = ref(false)
const skinStore = useSkinStore()
const shinConfigRef = ref<InstanceType<typeof SkinConfig> | null>(null)
const isNotSkinConfig: boolean = localStorage.getItem('skinConfig') === null
onMounted(() => {
  if (!shinConfigRef.value) return
  if (isNotSkinConfig) {
    shinConfigRef.value.setSkin({
      darkTheme: config.defaultSkinConfig.darkTheme,
      followSystem: config.defaultSkinConfig.followSystem,
      size: config.defaultSkinConfig.size,
      scrollBarWidth: config.defaultSkinConfig.scrollBarWidth,
      primaryColor: config.defaultSkinConfig.primaryColor,
      successColor: config.defaultSkinConfig.successColor,
      warningColor: config.defaultSkinConfig.warningColor,
      dangerColor: config.defaultSkinConfig.dangerColor,
      infoColor: config.defaultSkinConfig.infoColor
    })
  }
  const thisConfig = shinConfigRef.value.getSkin()

  if (thisConfig) skinStore.syncSkin(thisConfig)
  darkTheme.value = skin.skinConfig.darkTheme || false
})

const changeDark = (val:boolean) => {
  skin.skinConfig.darkTheme = val
  darkTheme.value = val
  skin.apply()
  skin.save()
}

const change = (e: any) => {
  skinStore.syncSkin(e)
}

const nickName = ref(Cookies.get('nickName'))
</script>

<style scoped lang="scss">
.u-slt {
  margin-right: 16px;
  width: 170px;
}

.dark-div {
  width: 24px;
  height: 24px;
  // border: 1px solid red;
  color: var(--el-color-primary);
  cursor: pointer;
  font-size: 20px;
  text-align: center;
  line-height: 29px;
}
.g-head-box {
  display: flex;
  position: relative;
  // z-index: 6;
  width: 100%;
  height: 56px;
  justify-content: flex-end;
  align-items: center;
  background-color: var(--el-bg-color);
  box-shadow: 0 1px 2px rgb(0 21 41 / 8%);

  .u-flex-grow {
    flex: 1;
  }

  .u-user-gp {
    &:focus-visible {
      outline: none;
    }

    .u-gp {
      display: flex;
      padding: 0 12px;
      justify-content: space-between;
      align-items: center;

      .u-img {
        width: 32px;
        height: 32px;
        border-radius: 50%;
      }

      .u-name {
        padding-left: 8px;
        font-size: var(--m-fs-body);
      }
    }
  }
}

.u-btn {
  width: 50px;
  height: 55px;
  font-size: 16px;
  line-height: 55px;
  cursor: pointer;

  &:hover {
    background-color: rgb(243, 243, 245);
  }
}

.dark-switch {
  margin-right: 8px;
}
</style>

<style lang="scss">
.g-head-box .u-slt .el-select__wrapper {
  box-shadow: none;
}
</style>
