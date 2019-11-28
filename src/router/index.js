import Vue from 'vue'
import VueRouter from 'vue-router'
import nprogress from 'nprogress'

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
          component: () => import('@/views/home')
        },
        {
          path: '/user',
          name: 'user',
          component: () => import('@/views/user')
        },
        {
          path: '/share',
          name: 'share',
          component: () => import('@/views/share')
        },
        {
          path: '/personal',
          name: 'personal',
          component: () => import('@/views/personal')
        },
        {
          path: '/edit_personal',
          name: 'edit_personal',
          component: () => import('@/views/edit_personal')
        },
        {
          path: '/money_water',
          name: 'money_water',
          component: () => import('@/views/money_water')
        },
        {
          path: '/area_invest',
          name: 'area_invest',
          component: () => import('@/views/area_invest')
        },
        {
          path: '/invest_dis',
          name: 'invest_dis',
          component: () => import('@/views/invest_dis')
        },
        {
          path: '/project_dis',
          name: 'project_dis',
          component: () => import('@/views/pro_dis')
        },
        {
          path: '/income_expenditure',
          name: 'income_expenditure',
          component: () => import('@/views/income_expenditure')
        },
        {
          path: '/page_right',
          name: 'page_right',
          component: () => import('@/views/page_right')
        },
        {
          path: '/btn_right',
          name: 'btn_right',
          component: () => import('@/views/btn_right')
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  // 开启进度条
  nprogress.start()
})

export default router
