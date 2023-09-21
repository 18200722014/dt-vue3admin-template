import { createApp } from 'vue'
import './styles/index.scss'
import App from './App.vue'
import { setupRouter } from './router'
import { setupStore } from './store'
import { useElementComponents } from './plugins/element-plus'
/** element-plus暗黑主题 */
import 'element-plus/theme-chalk/dark/css-vars.css'
/** 导入安装i18n函数 */
import { setupI18n } from './locales'
/** 创建vue实例对象 */
const app = createApp(App)

/** 注册vue-router */
setupRouter(app)

/** 注册pinia */
setupStore(app)

/** 安装i18n国际化语言 */
setupI18n(app)

/** 注册element-plus组件 */
useElementComponents(app)

app.mount('#app')
