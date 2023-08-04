import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import './mock'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import { createPinia } from 'pinia'


createApp(App).use(router).use(store).use(ElementPlus, {
    locale: zhCn,
  }).use(createPinia()).mount('#app')