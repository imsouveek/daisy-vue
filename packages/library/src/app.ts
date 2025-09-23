import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import { createDaisyVue } from './main'

const daisyVue = createDaisyVue({
    shamefullyRegisterAllComponents: true
})

createApp(App).use(daisyVue).mount('#app')
