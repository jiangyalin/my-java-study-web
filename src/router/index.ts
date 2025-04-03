import { createRouter, createWebHistory } from 'vue-router'
import Main from '@/components/Main.vue'

export interface RoutesMainChildrenItemType {
  path: string;
  mate: {
    title: string;
    icon: string;
  };
  name: string;
  component: () => any;
  children?: RoutesMainChildrenItemType[];
}
export type RoutesMainChildrenType = RoutesMainChildrenItemType[]
export const routesMainChildren: RoutesMainChildrenType = [{
  path: '/home',
  mate: {
    title: '首页',
    icon: 'House'
  },
  name: 'Home',
  component: () => import('@/views/Home.vue')
}, {
  path: '/user-list',
  mate: {
    title: '用户列表',
    icon: 'Notebook'
  },
  name: 'UserList',
  component: () => import('@/views/user/UserList.vue')
}]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/views/login/Login.vue')
    },
    {
      path: '/',
      name: 'Index',
      redirect: '/home',
      component: Main,
      children: routesMainChildren
    }
  ]
})

export default router
