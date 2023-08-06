import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { join } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // 指定软链接
  resolve: {
    alias: {
      '@': join(__dirname, '/src')
    }
  }
})
