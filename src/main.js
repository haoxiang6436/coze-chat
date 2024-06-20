import { createApp } from 'vue'
import './style.scss'
import pinia from './store'
import App from './App.vue'
import router from '~/router';
// import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)

// for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
//   app.component(key, component)
// }

app.use(pinia).use(router).mount('#app')
