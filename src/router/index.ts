import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import main from '../layout/main-layout.vue'
import AuthCallback from '../components/user/user-interact/user-callback.vue'
import UI from '../components/user/user-profile/user-ui.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: main
    },
    {
      path: '/callback/:',
      name: 'AuthCallback',
      component: AuthCallback
    },
    {
      path: '/id/:usedId',
      name: 'UI',
      component: UI
    }
  ]
})

export default router