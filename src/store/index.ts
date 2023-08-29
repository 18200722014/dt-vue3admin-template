import { createPinia } from 'pinia'
import { type App } from 'vue'

/** 向外暴露pinia实例，方便再setup语法糖意外的地方使用store */
export const store = createPinia()

/**
 * 在vue实例对象上注册pinia
 * @param app vue实例对象
 */
export function setupStore(app: App): void {
  app.use(store)
}
