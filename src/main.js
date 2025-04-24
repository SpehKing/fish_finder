import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Settings from './components/Settings.vue'
import Sensor from './components/Sensor.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: App },
    { path: '/settings', component: Settings },
    { path: '/sensor', component: Sensor }
  ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
