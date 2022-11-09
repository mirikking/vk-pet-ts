/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module 'animejs'

interface ImportMetaEnv {
  readonly VITE_VK_APP_KEY: string
  readonly VITE_VK_APP_SERVICE_KEY: string
  readonly VITE_VK_APP_ID: string
  readonly VITE_DEV_CALLBACK: string
}