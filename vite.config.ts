import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue()
  ],
  server: {
    port: 5173
  },
})

interface ImportMetaEnv {
  readonly VITE_VK_APP_KEY: string
  readonly VITE_VK_APP_SERVICE_KEY: string
  readonly VITE_VK_APP_ID: string
  readonly VITE_DEV_CALLBACK: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
