import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '',
      name: 'layout',
      component: () => import('@/views/layout'),
      children: [
        {
          path: '/',
          name: 'home',
          component: () => import('@/views/home')
        }
      ]
    }
  ]
})

export default router
