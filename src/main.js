import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "@/assets/css/vertical-layout-light/style.css"

createApp(App).use(store).use(router).mount('#app')
