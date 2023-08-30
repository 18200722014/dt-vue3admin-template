import { createApp } from 'vue'
import './styles/index.scss'
import App from './App.vue'
import { setupRouter } from '@/router'
import { setupStore } from '@/store/index'
import { useElementComponents } from '@/plugins/element-plus'

/** 创建vue实例对象 */
const app = createApp(App)

/** 注册vue-router */
setupRouter(app)

/** 注册pinia */
setupStore(app)

/** 注册element-plus组件 */
useElementComponents(app)

app.mount('#app')
