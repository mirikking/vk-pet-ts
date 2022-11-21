import { defineStore } from 'pinia'
import { UserData } from './interfaces/types'

export const useUserStore = defineStore('userAccess', {
  state: () => ({
    accessToken: localStorage.getItem('userAccess') != undefined ? JSON.parse(localStorage.getItem('userAccess') as string).accessToken : null,
    userId: localStorage.getItem('userAccess') != undefined ? JSON.parse(localStorage.getItem('userAccess') as string).userId : null,
    isAuthorized: localStorage.getItem('userAccess') != undefined ? JSON.parse(localStorage.getItem('userAccess') as string).isAuthorized : null
  } as UserData),
  actions: {
    setUserData(data: UserData) {
      this.accessToken = data.accessToken
      this.userId = data.userId
      this.isAuthorized = data.isAuthorized
      localStorage.setItem('userAccess', JSON.stringify(useUserStore().$state))
    }
  }
})