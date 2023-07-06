import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/LoginPage.vue')
    },
    {
      path: '/recoveryPassword',
      name: 'recoveryPassword',
      component: () => import('@/views/RecoveryPasswordPage.vue')
    },
    {
      path: '/insertCode',
      name: 'insertCode',
      component: () => import('@/views/InsertCodePage.vue')
    },
    {
      path: '/changePassword',
      name: 'changePassword',
      component: () => import('@/views/ChangePasswordPage.vue')
    }
  ]
})

export default router
