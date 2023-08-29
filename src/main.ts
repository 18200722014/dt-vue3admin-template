import { createApp } from 'vue'
import './styles/index.scss'
import App from './App.vue'
import { setupRouter } from '@/router'
import { setupStore } from '@/store/index'

/** 创建vue实例对象 */
const app = createApp(App)

/** 注册vue-router */
setupRouter(app)

/** 注册pinia */
setupStore(app)

app.mount('#app')
