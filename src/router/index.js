import Vue from 'vue'
import VueRouter from 'vue-router'
import nprogress from 'nprogress'
import { getStorage } from '@/utils/storge'
import store from '@/store'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login')
    },
    {
      path: '',
      component: () => import('@/views/layout'),
      children: [
        {
          path: '/',
          name: 'home',
          component: () => import('@/views/home'),
          meta: [
            { name: '首页' }
          ]
        },
        {
          path: '/user',
          name: 'user',
          component: () => import('@/views/user'),
          meta: [
            { name: '用户管理' }
          ]
        },
        {
          path: '/share',
          name: 'share',
          component: () => import('@/views/share'),
          meta: [
            { name: '分享功能' }
          ]
        },
        {
          path: '/personal',
          name: 'personal',
          component: () => import('@/views/personal'),
          meta: [
            { name: '个人信息' }
          ]
        },
        {
          path: '/edit_personal',
          name: 'edit_personal',
          component: () => import('@/views/edit_personal'),
          meta: [
            { name: '修改信息' }
          ]
        },
        {
          path: '/money_water',
          name: 'money_water',
          component: () => import('@/views/money_water'),
          meta: [
            { name: '资金流水' }
          ]
        },
        {
          path: '/area_invest',
          name: 'area_invest',
          component: () => import('@/views/area_invest'),
          meta: [
            { name: '区域投资' }
          ]
        },
        {
          path: '/invest_dis',
          name: 'invest_dis',
          component: () => import('@/views/invest_dis'),
          meta: [
            { name: '区域投资' }
          ]
        },
        {
          path: '/project_dis',
          name: 'project_dis',
          component: () => import('@/views/pro_dis'),
          meta: [
            { name: '项目分布' }
          ]
        },
        {
          path: '/income_expenditure',
          name: 'income_expenditure',
          component: () => import('@/views/income_expenditure'),
          meta: [
            { name: '收支分布' }
          ]
        },
        {
          path: '/page_right',
          name: 'page_right',
          component: () => import('@/views/page_right'),
          meta: [
            { name: '页面权限' }
          ]
        },
        {
          path: '/btn_right',
          name: 'btn_right',
          component: () => import('@/views/btn_right'),
          meta: [
            { name: '按钮权限' }
          ]
        },
        {
          path: '/401',
          name: 'error',
          component: () => import('@/views/error'),
          meta: [
            { name: '401' }
          ]
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  // 开启进度条
  nprogress.start()
  const userInfo = getStorage(store.state.user_key)
  if (to.path !== '/login') {
    // 判断是否有登录缓存
    if (!userInfo) {
      // 如果已在登录页面则关闭进度条
      if (from.path === '/login') {
        nprogress.done()
      }
      next({ name: 'login' })
    } else {
      // 如果已经登录，则允许进行下一步
      next()
    }
  } else {
    // 防止有人直接输入路径跳转
    if (!userInfo) {
      next()
    } else {
      next({ name: 'home' })
      window.location.reload()
    }
  }
  if (to.path === '/page_right') {
    if (store.state.role !== 'admin') {
      next({ name: 'error' })
    } else {
      next()
    }
  }
})

// 后置操作rou
router.afterEach((to, from) => {
  // 关闭进度条
  nprogress.done()
})

export default router
