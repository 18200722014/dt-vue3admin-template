import { defineStore, type Store } from 'pinia'
import { ref } from 'vue'
import { store } from '../index'

export const useLayoutStore = defineStore('layout', () => {
  /** 控制侧边栏是否收起 */
  const isCollapse = ref(false)

  /** 切换isCollapse的状态 */
  const changeIsCpllapse = (): void => {
    isCollapse.value = !isCollapse.value
  }

  return { isCollapse, changeIsCpllapse }
})

/**
 * 用于setup语法糖以外的地方使用
 * @returns {Store}
 */
export const useLayoutStoreHook = (): Store => {
  return useLayoutStore(store)
}
