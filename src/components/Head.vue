<template>
  <div class="g-head-box">
    <el-icon
      class="u-btn"
      @click="switchMenuMode"
    >
      <Fold />
    </el-icon>
    <el-menu
      :defaultActive="props.modelValue"
      class="el-menu-demo"
      mode="horizontal"
      :ellipsis="false"
    >
      <!--  v-hasBtnPermission="'board'" -->
      <el-menu-item @click="toDashboard">
        <el-icon><DataLine /></el-icon>
      </el-menu-item>
      <el-menu-item
        v-for="item in AppsDatas"
        :key="item.id"
        :index="item.id"
        @click="clickAppsItem(item.id)"
      >
        {{ item.name }}
      </el-menu-item>
    </el-menu>
    <div class="u-flex-grow" />
    <el-select
      class="u-slt"
      v-if="accountSetOptions.length > 1"
      v-model="accountSet"
      :size="skinStore.size"
      @change="switchAccountSet"
    >
      <el-option
        v-for="item in accountSetOptions"
        :key="item.value"
        :value="item.value"
        :label="item.label"
      ></el-option>
    </el-select>
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
            v-if="avatar"
            class="u-img"
            :src="avatar"
          />
          <!-- <img v-else class="u-img" src="@/assets/chlogo.png" /> -->
          <span class="u-name">{{ nickName }}</span>
        </div>
      </div>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item @click="openAppInfo">app下载</el-dropdown-item>
          <!-- <el-dropdown-item @click="editUser">用户设置</el-dropdown-item> <el-dropdown-item @click="editPwd">修改密码</el-dropdown-item> -->
          <el-dropdown-item @click="signOut()">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
    <AppInfo ref="AppInfoRef"></AppInfo>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import AppInfo from '@/components/AppInfo.vue'
import signOut from '@/hook/signOut'
import bus from '@/tool/bus'
import { useRoute } from 'vue-router'
import type { Menu } from '@/interface/type'
import Cookies from 'js-cookie'
import tool from '@/tool'
import config from '@/config'
import { SkinConfig, useSkin } from 'br-dionysus'
import { useSkinStore } from '@/stores/skin/counter'
import api from '@/api'
import { nanoid } from 'nanoid'
import traverseTree from '@/tool/traverseTree'
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

const AppInfoRef = ref<InstanceType<typeof AppInfo> | null>(null)
const openAppInfo = () => {
  if (!AppInfoRef.value) return
  AppInfoRef.value.open()
}

const route = useRoute()
const icon = ref<string>('')
const mode = ref<string>('default')

const props = withDefaults(
  defineProps<{
    modelValue?: string
  }>(),
  {
    modelValue: ''
  }
)

const breadcrumb = ref<Menu[]>([])
const AppsDatas = ref<any>([])
const emit = defineEmits(['update:modelValue', 'change'])
onMounted(async () => {
  const AppsData: any[] = JSON.parse(localStorage.getItem('AppsData') || '[]')
  // isShowDashboard.value = AppsData.some(item => item.code === 'dashboard')
  AppsDatas.value = AppsData.filter(item => item.code !== 'dashboard')
})
watch(
  () => route.path,
  async () => {
    const menuData: any[] = JSON.parse(localStorage.getItem('menuData') || '[]') || []
    const menuTree = tool.listToTree(menuData)
    breadcrumb.value = getNodeProp(menuTree, route.name).map((item: any) => ({
      title: item.title,
      path: item.path
    }))
  }
)

const change = (e) => {
  skinStore.syncSkin(e)
}

const getNodeProp = (tree: any, value: string) => {
  const path: any = []

  const walk = (tree: any, value: any) => {
    for (const item of tree) {
      path.push(item)
      if (item.name === value) {
        return true
      } else if (item.children) {
        const result = walk(item.children, value)
        if (!result) {
          path.pop()
        } else {
          return true
        }
      } else {
        path.pop()
      }
    }
    return false
  }

  walk(tree, value)
  return path
}

const switchMenuMode = () => {
  mode.value = mode.value === 'default' ? 'mini' : 'default'
  if (mode.value === 'default') icon.value = 'Fold'
  if (mode.value === 'mini') icon.value = 'Expand'

  bus.emit('switchMenuMode', mode.value)
}

const nickName = ref(Cookies.get('nickName'))
const avatar = ref(localStorage.getItem('avatar') || '')

// const editUser = () => {}
// const editPwd = () => {}

// 点击某个应用时
const clickAppsItem = (appId: string) => {
  emit('update:modelValue', appId)
  emit('change', appId)
}

// 账套切换
const accountSet = ref<string>(Cookies.get('sAccId'))
const accountSetOptions = ref<Option[]>([])
const getAcc = async () => {
  const res = await api.login.postLoginAcclist({
    cUserId: Cookies.get('account'),
    cPassWord: tool.decode(Cookies.get('password')),
    SystemType: Number(Cookies.get('systemType'))
  })
  accountSetOptions.value = (res.data || []).map(item => ({
    label: item.sAccName as string,
    value: item.sAccId as string
  }))
}
getAcc()
const switchAccountSet = async () => {
  const res = await api.login.postLoginDologin({
    cUserId: Cookies.get('account'),
    cPassWord: tool.decode(Cookies.get('password')),
    sAccId: accountSet.value,
    SystemType: Number(Cookies.get('systemType')),
    uuid: nanoid(),
    ForceLogin: true
  })

  Cookies.set('token', res.data.accessToken)

  Cookies.set('nickName', res.data.cUserName)
  Cookies.set('userId', res.data.cUserId)
  Cookies.set('LoginSys', res.data.LoginSys)
  if (res.data?.userImg) {
    localStorage.setItem('avatar', config.serverApi + '/' + res.data?.userImg)
  }
  Cookies.set('sAccId', accountSet.value)
  const loginUserParam = {
    appId: ''
  }
  const userauthdata = await api.sysuser.getSysuserUserauthdata(loginUserParam)
  const treeMap = (tree: any[]): any => {
    return tree.filter(item => !item.IsBtn).map(item => {
      return {
        id: item.id,
        pid: item.parentId,
        name: item.code,
        code: item.code,
        path: item.path,
        title: item.title,
        children: treeMap(item.children || []),
        icon: item.icon,
        // icon: 'Location',
        isBtn: item.isBtn,
        isHid: item.isHid,
        appId: item.appId
      }
    })
  }
  const menuData = treeMap((userauthdata.data.Menus || []))

  const AppsData = (userauthdata.data.Apps || []).map(item => {
    return {
      id: item.Id,
      code: item.Code,
      name: item.Name
    }
  })
  localStorage.setItem('menuData', JSON.stringify(menuData))
  localStorage.setItem('AppsData', JSON.stringify(AppsData))

  await api.platconfig.postPlatconfigList().then(res => {
    (res.data || []).forEach(item => {
      localStorage.setItem(item.cKey as string, item.cData as string)
    })
  })

  // 保存按钮权限
  const menuBtnsPermission = await api.sysuser.getSysuserUserauthbtns()
  const buttonPermissions: string[] = []
  traverseTree(menuBtnsPermission.data as any, item => {
    buttonPermissions.push(item.Code)
  })
  localStorage.setItem('buttonPermissions', JSON.stringify(buttonPermissions))

  window.location.reload()
}

const toDashboard = () => {
  window.open('/#/dashboard')
}
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
  justify-content: space-between;
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
