/** 引入定义store函数 */
import { defineStore, type Store } from 'pinia'
/** 引入vue组合式API */
import { ref } from 'vue'
/** 引入i18n实例对象 */
import { i18n } from '@/locales'
/** 导入pinia实例对象 */
import { store } from '../index'

/** setLocale函数的lang参数的类型 */
type lang = 'zh' | 'en'

/** 创建 locales Store */
export const useLocalesStore = defineStore(
  'locales',
  () => {
    // 当前语言
    const locale = ref(i18n.global.locale.value)
    /**
     * 设置当前语言
     * @param lang 设置成的语言
     */
    function setLocale(lang: lang): void {
      console.log('lang', lang)
      /** 改变当前所处语言环境的状态，刷新的时候i18n会取这个值作为当前的语言环境 */
      locale.value = lang
      /** 点击的时候立马修改语言（切换语言） */
      i18n.global.locale.value = lang
    }

    return {
      locale,
      setLocale
    }
  },
  // 本地持久化缓存
  {
    persist: true
  }
)

/**
 * 在 setup() 外部使用 useLocalesStore
 * 详情见：https://pinia.vuejs.org/zh/ssr/
 */
export const useLocalesStoreHook = (): Store => {
  return useLocalesStore(store)
}
