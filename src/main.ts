// src/main.ts
import { createApp } from 'vue'
import App from './App.vue'
import './style.css'                // ← Tailwind CSS SEGUNDO (¡NO ELIMINAR!)

// Font Awesome (mejor en index.html, pero esto funciona)
const link = document.createElement('link')
link.rel = 'stylesheet'
link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
document.head.appendChild(link)

createApp(App).mount('#app')