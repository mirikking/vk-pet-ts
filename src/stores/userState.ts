import { defineStore } from 'pinia'

export const useUserStore = defineStore('userAccess', {
  state: () => {
    return { 
      userAccess: JSON.parse(localStorage.getItem('userAccess') as string) || {accessToken: null, userId: null, isAuthorized: false}
    }
  },
})