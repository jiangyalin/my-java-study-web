<template>
  <div
    class="g-login-box"
    @keydown.enter="login"
  >
    <div class="u-bg">
      <LoginBg
        :themeColor="skin.skinConfig.primaryColor"
        :darkTheme="skin.skinConfig.darkTheme"
      ></LoginBg>
    </div>
    <div class="u-box">
      <!-- 暗夜模式 -->
      <div class="dark-div">
        <el-tooltip
          class="box-item"
          effect="dark"
          :content="darkTheme ? '白昼模式' : '暗夜模式'"
          placement="top-start"
        >
          <el-icon
            v-if="!darkTheme"
            @click="changeDark(true)"
          >
            <Moon />
          </el-icon>
          <el-icon
            v-if="darkTheme"
            @click="changeDark(false)"
          >
            <Sunny />
          </el-icon>
        </el-tooltip>
      </div>
      <!--<div class="u-tt">-->
      <!--  <img-->
      <!--    class="u-logo"-->
      <!--    src="@/assets/chlogo.png"-->
      <!--  />-->
      <!--  <p class="u-p">my-java</p>-->
      <!--</div>-->
      <span class="u-sn">密码登录</span>
      <el-form id="formLogin">
        <div class="u-ct">
          <el-input
            id="account"
            class="u-it"
            v-model="ruleForm.account"
            placeholder="请输入账号"
            size="large"
            clearable
            name="account"
            prefixIcon="User"
          />
          <el-input
            id="password"
            class="u-it"
            v-model="ruleForm.password"
            placeholder="请输入密码"
            size="large"
            showPassword
            name="password"
            autocomplete="false"
            prefixIcon="Unlock"
          />
          <el-checkbox
            class="u-cbx"
            v-model="ruleForm.remember"
            label="记住密码"
            size="large"
          />
          <el-button
            class="u-btn"
            type="primary"
            size="large"
            round
            :loading="btnLoading"
            @click="login"
          >
            确定
          </el-button>
        </div>
      </el-form>
    </div>
    <div class="my-dialog">
      <m-dialog
        v-model="dialogVisible206"
        title="温馨提示"
        width="20%"
        resize
        draggable
      >
        <span>{{ msg206 }}</span>
        <template #footer>
          <span class="dialog-footer">
            <el-button @click="dialogVisible206 = false">取消</el-button>
            <el-button
              type="primary"
              @click="clickYes"
            >
              确定
            </el-button>
          </span>
        </template>
      </m-dialog>
    </div>
  </div>
</template>

<script setup lang="ts">
import Cookies from 'js-cookie'
import { reactive, ref, onMounted } from 'vue'
import api from '@/api'
import tool from '@/tool'
import router from '@/router'
import { useSkin } from 'br-dionysus'
import LoginBg from '@/views/login/LoginBg.vue'

const darkTheme = ref(false)
const skin = useSkin()
skin.apply()

interface Login {
  account: string // 账号
  password: string // 密码
  remember: boolean // 记住密码
  SystemType: number // 登录身份
  ForceLogin: boolean // 强制登录
}
const ruleForm: Login = reactive<Login>({
  account: '',
  password: '',
  remember: false,
  SystemType: 1,
  ForceLogin: false
})

const dialogVisible206 = ref<boolean>(false)
const msg206 = ref<any>('')

const remember = Cookies.get('remember') === 'true'
ruleForm.remember = remember
const saveAccount = Cookies.get('account')
if (saveAccount && remember) ruleForm.account = saveAccount
const savePassword = tool.decode(Cookies.get('password'))
if (savePassword && remember) ruleForm.password = savePassword

const changeDark = (val: boolean) => {
  skin.switchDark(val)
  darkTheme.value = val
  skin.save()
}
skin.apply()
const btnLoading = ref<boolean>(false)
const login = async () => {
  btnLoading.value = true
  try {
    const res = await api.login.postLogin({
      /**
       * @description 密码
       * @example 123456
       */
      password: ruleForm.password,
      /**
       * @description 用户名
       * @example admin
       */
      username: ruleForm.account
    })

    Cookies.set('token', res.data)

    const userInfoRes = await api.user.getUserInfo()

    Cookies.set('nickName', userInfoRes.data.nickName)
    Cookies.set('userId', userInfoRes.data.id)

    Cookies.set('account', ruleForm.account)
    Cookies.set('password', tool.crypto(ruleForm.password))
    Cookies.set('remember', ruleForm.remember ? 'true' : 'false')

    router.push({ path: '/home' })
  } finally {
    btnLoading.value = false
  }
}

const clickYes = () => {
  dialogVisible206.value = false
  ruleForm.ForceLogin = true
  login()
}

onMounted(() => {
  darkTheme.value = skin.skinConfig.darkTheme || false
})
</script>

<style scoped lang="scss">
.g-login-box {
  position: relative;
  width: 100%;
  height: 100%;

  .u-bg {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .u-box {
    position: absolute;
    top: 50%;
    left: 50%;
    padding: 24px 32px;
    width: 424px;
    background-color: var(--el-bg-color);
    border-radius: 20px;
    transform: translate(-50%, -50%);
    box-shadow:
      0 0 rgba(0, 0, 0, 0),
      0 0 rgba(0, 0, 0, 0);

    .u-tt {
      display: flex;
      height: 64px;
      justify-content: space-between;
      align-items: center;

      .u-logo {
        height: 100%;
        font-size: 64px;
        color: var(--el-color-primary);
      }

      .u-p {
        font-weight: 800;
        font-size: 28px;
        color: #0000;
        -webkit-background-clip: text;
        background-image: linear-gradient(252deg, var(--el-color-primary-light-7) 0%, var(--el-color-primary) 100%);
      }
    }

    .u-sn {
      display: block;
      padding-top: 28px;
      font-weight: 800;
      font-size: 18px;
      line-height: 28px;
      color: var(--el-color-primary);
    }

    .u-ct {
      padding-top: 24px;

      .u-it {
        margin-bottom: 16px;
      }

      .u-cbx {
        margin-bottom: 26px;
      }

      .u-btn {
        width: 100%;
      }
      .m-2 {
        margin-bottom: 16px;
      }
    }
  }

  .my-selects {
    display: flex;
    // border: 1px solid #c0c4cc;
    box-shadow: 0 0 0 1px var(--el-border-color);
    border-radius: 3px;
    .el-divider--vertical{
      height: 40px;
    }
    :deep(.el-input__wrapper) {
      box-shadow: 0 0 0 0 !important;
    }
    .my-loginSys{
      width: 45%;
    }
  }
}
.dark-div {
  position: absolute;
  right: 10px;
  top: 10px;
  width: 24px;
  height: 24px;
  // border: 1px solid red;
  color: var(--el-color-primary);
  cursor: pointer;
  font-size: 20px;
  text-align: center;
  line-height: 29px;
}

</style>

<style lang="scss">
.g-login-box {
  .s-no-br {
    width: 100%;
    box-shadow: none;

    .el-select__wrapper {
      box-shadow: none;
    }
  }

  .s-no-br-border {
    border-left: 1px solid var(--el-border-color);
  }
}
</style>
