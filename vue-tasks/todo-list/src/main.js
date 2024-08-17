import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import App from './App.vue'

const app = createApp(App)
const pinia = createPinia()
app.use(ElementPlus)
app.use(pinia)
app.mount('#app')