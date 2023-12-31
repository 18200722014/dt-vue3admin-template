import type { App } from 'vue'
import { createI18n } from 'vue-i18n'
// 导入语言
import en from './en'
import zh from './zh'

/** 获取浏览器界面语言，默认语言。 navigator.language: zh-CN
 * 我们只需要它的前缀：zh，所以使用replace将zh后面的替换为空
 */
let currentLanguage = navigator.language.replace(/-[A-Za-z]*/, '')
// console.log(currentLanguage)

/** 从本地缓存localStorage中获取语言环境 */
const locales = localStorage.getItem('locales')

console.log('locales', locales)

/** 如果本地缓存中记录了语言环境，则使用本地缓存记录的语言环境  */
if (locales !== null) {
  currentLanguage = JSON.parse(locales)?.locale
}

/** 创建i18n实例对象 */
export const i18n = createI18n({
  locale: currentLanguage,
  legacy: false, // 防止组件引入i18n，vite脚手架报错
  messages: {
    zh,
    en
  }
})

/**
 * 安装i8n
 * @param app vue实例对象
 */
export const setupI18n = (app: App): void => {
  app.use(i18n)
}

/** Nav.vue头部导航栏中英文切换下拉菜单使用 */
export const langs = [
  { key: 'zh', title: '中文' },
  { key: 'en', title: 'English' }
]
