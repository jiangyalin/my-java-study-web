import { describe, it, expect, vi } from 'vitest'
import { mount, config } from '@vue/test-utils'
import ElementPlus from 'element-plus'
import { Guide, Notebook, Moon, Sunny } from '@element-plus/icons-vue'
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../../views/Home.vue'
import Login from '../../views/login/Login.vue'

config.global.plugins.push([ElementPlus, Guide])
describe('Login', () => {
  it('检查渲染完成', () => {
    const wrapper = mount(Login, {
      props: { },
      global: {
        components: {
          Guide,
          Notebook
        }
      }
    })
    expect(wrapper.text()).toContain('上海宝陆密码登录请选择账套记住密码 确定')
  })
  it('成功登录', () => {
    const router = createRouter({
      history: createWebHistory(),
      routes: [
        { path: '/', component: Home },
        { path: '/login', component: Login }
      ]
    })
    const wrapper = mount(Login, {
      props: { },
      global: {
        components: {
          Guide,
          Notebook,
          Moon,
          Sunny
        },
        plugins: [router]
      }
    })
    // wrapper.find('#account').setValue('jyl')
    // wrapper.find('#password').setValue('123456')
    console.log('wrapper.vm', wrapper.vm)

    wrapper.vm.ruleForm.sAccId = '800'
    wrapper.vm.ruleForm.account = 'jyl'
    wrapper.vm.ruleForm.password = '123456'
    wrapper.vm.login()
    console.log('wrapper.vm.config', wrapper.vm.config)

    // expect(wrapper.vm.ruleForm.sAccId).toBe('800')

    // // 模拟 `$router.push` 方法
    const pushSpy = vi.spyOn(router, 'push')
    expect(pushSpy).toHaveBeenCalledWith('/')
  })
})
