import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
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
        }
      ]
    }
  ]
})

export default router
