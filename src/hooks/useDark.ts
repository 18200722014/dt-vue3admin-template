import { onMounted, ref, type Ref } from 'vue'
import { setCacheOfLocal, getCacheOfLocal } from '@/utils/cache'
/** useDark函数的返回值类型 */
type UseDark = (isDark: boolean) => void

/** 当前系统所处模式 */
const systemDarkMode = window.matchMedia('(prefers-color-schem:dark)').matches ? 'dark' : ''

/** 当前模式，初始值：如果缓存中有htmlModeClass的值否则取系统当前所处的模式 */
const htmlModeClass = getCacheOfLocal('htmlModeClass') ?? systemDarkMode

console.log('systemDarkMode', systemDarkMode)

/** 初始化开关绑定的值 */
export const useDark = (): Ref<boolean> => {
  /** 开关绑定的值 */
  const isDark = ref(!!htmlModeClass)
  /** 是否切换为暗黑模式，初始值为当前模式，当前模式为dark则为true，否则为false */
  return isDark
}

/** 返回 */
export const useToggle = (isDark: Ref<boolean>): UseDark => {
  /** 组件在页面挂载（渲染）完毕时触发 */
  onMounted(() => {
    /** 组件渲染完毕就设置html类名 */

    document.documentElement.className = htmlModeClass
  })

  return function () {
    /** 向本地缓存中添加htmlModeClass，来记录当前所处模式 */
    /** 如果isDark为true，那么表示为暗黑模式，反之雪白模式 */
    isDark.value ? setCacheOfLocal('htmlModeClass', 'dark') : setCacheOfLocal('htmlModeClass', '')

    /** 设置html元素的类名 */
    document.documentElement.classList.toggle('dark')
  }
}
