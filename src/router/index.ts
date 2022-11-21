import { createRouter, createWebHistory, createWebHashHistory, routerKey } from 'vue-router';
import { useUserStore } from '../stores/userState'
import main from '../layout/main-layout.vue';
import UserInit from '../components/@user/user-init/user-profile-init.vue';
import AuthFailed from '../components/@user/user-interact/user-auth-failed.vue';

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
      redirect: (route) => {
        const tokenParseRegex: RegExp = /access_token=(.*?)&/;
        const idParseRegex: RegExp = /user_id=(.*?)$/;
        const exAccessToken: RegExpMatchArray | null = route.hash.match(tokenParseRegex);
        const exUserId: RegExpMatchArray | null = route.hash.match(idParseRegex);
        route.hash = "";
        if (exAccessToken !== null) {
          useUserStore().setUserData({
            accessToken: exAccessToken![1],
            userId:exUserId![1],
            isAuthorized: true
          })
        } else {
          return {
              name: 'AuthFailed',
            }
        }
        if (exUserId) {
          return {
            name: 'UserInit',
            params: { usedId: String(exUserId![1])}
          }
        } else {
          return {
              name: 'AuthFailed',
            }
        }
      }
    },
    {
      path: '/id/:usedId',
      name: 'UserInit',
      component: UserInit,
    },
    {
      path: '/auth-failed',
      name: 'AuthFailed',
      component: AuthFailed
    }
  ]
})

export default router