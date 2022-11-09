import { defineStore } from 'pinia'

export const useAnimationState = defineStore('animationState', {
  state: () => {
    return { 
      animationState: JSON.parse(sessionStorage.getItem('animationState') as string) || {welcomeShowed: false}
    }
  },
})