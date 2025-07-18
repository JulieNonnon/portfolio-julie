import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './base.css'; //css global

createApp(App).use(router).mount('#app')
