import { defineStore } from 'pinia'

export const useUserStore = defineStore('userAccess', {
  state: () => {
    return { 
        userAccess: (JSON.parse(localStorage.getItem('userAccess') as any)) || {accessToken: null, userId: null, isAuthorized: null} as Object
    }
  },
})