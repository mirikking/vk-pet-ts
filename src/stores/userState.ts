import { defineStore } from 'pinia'

export const useUserStore = defineStore('userAccess', {
  state: () => {
    return { 
        userAccess: (JSON.parse(localStorage.getItem('user') as any)) || {accessToken: null, userId: null, isAuthorized: null} as Object
    }
  },
})