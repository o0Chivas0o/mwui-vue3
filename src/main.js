import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { createWebHashHistory, createRouter } from 'vue-router'
import Home from './components/Home.vue'
import Doc from './components/Doc.vue'

const histroy = createWebHashHistory()
const router = createRouter({
  history,
  routes: [
	{ path: '/', component: Home },
	{ path: '/doc', component: Doc },
  ]
})

createApp(App).mount('#app')
