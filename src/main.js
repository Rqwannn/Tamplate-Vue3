import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import router from "./router/routes"
import store from './store/stores';

import { registerSW } from 'virtual:pwa-register'

createApp(App).use(router).use(store).mount('#app')

registerSW({
    // immediate: true,
    onNeedRefresh() {},
    onOfflineReady() {},
})