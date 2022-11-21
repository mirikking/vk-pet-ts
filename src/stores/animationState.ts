import { defineStore } from 'pinia'
import { AnimeData } from './interfaces/types'

export const useAnimationState = defineStore('animationState', {
  state: () => ({                                           // i love miyagi
    welcomeShowed: sessionStorage.getItem('animationState') != undefined ? JSON.parse(sessionStorage.getItem('animationState') as string).welcomeShowed : false
  } as AnimeData), 
  actions: {
    setWelcomeState(completed: boolean) {
      this.welcomeShowed = completed
      sessionStorage.setItem('animationState', JSON.stringify(useAnimationState().$state))
    }
  }
})
