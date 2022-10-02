import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router';
import main from '../layout/main-layout.vue';
import AuthCallback from '../components/user/user-interact/user-callback.ts';
import UserInit from '../components/user/user-profile/user-profile-init.vue';
import AuthFailed from '../components/user/user-interact/user-auth-failed.vue';

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
      name: 'UserInit',
      component: UserInit
    },
    {
      path: '/auth-failed',
      name: 'AuthFailed',
      component: AuthFailed
    }
  ]
})

export default router