import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslint from 'vite-plugin-eslint'
import { resolve } from 'path'
import ElementPlus from 'unplugin-element-plus/vite'

/**
 * 生成目录的绝对路经
 * @param path 需要取别名的目录
 * @returns { String }
 */
function pathResolve(path: string): string {
  return resolve(process.cwd(), path)
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), eslint({ cache: false }), ElementPlus({})],
  resolve: {
    alias: [{ find: '@', replacement: pathResolve('src') }]
  },
  css: {
    // 预处理器配置
    preprocessorOptions: {
      scss: {
        additionalData: '@use "./src/styles/variables.scss";'
      }
    }
  }
})
