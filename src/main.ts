import { createPinia } from 'pinia'

import { createApp } from 'vue'
import router from '~/shared/lib/router'
import application from './app.vue'

import './assets/main.css'

/**
 * Асинхронная функция для инициализации приложения.
 */
async function initializeApp() {
  const app = createApp(application)
  const pinia = createPinia()

  app.use(pinia)
  app.use(router)

  app.mount('#app')
}

initializeApp()
