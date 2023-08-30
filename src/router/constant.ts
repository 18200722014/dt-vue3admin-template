/** 存放公共组件 */
import { type Component } from 'vue'

/** layout布局组件 */
export const layout = (): Component => import('@/layout/index.vue')
