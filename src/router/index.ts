import { type App } from 'vue'
import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

// 路由列表
const routes: RouteRecordRaw[] = []

const router = createRouter({
  /** 路由列表 */
  routes,
  /** history模式 */
  history: createWebHistory(),
  /** 页面跳转的滚动行为，延迟滚动 */
  scrollBehavior: (to, from, savePosition) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ top: 0, left: 0 })
      }, 1000)
    })
  }
})

/**
 * 在Vue实例上注册vue-router
 * @param app vue实例对象
 */
export function setupRouter(app: App): void {
  app.use(router)
}
