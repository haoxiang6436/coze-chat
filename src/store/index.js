import { createPinia } from "pinia"
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)



export * from './modules/user.js'
export * from './modules/ChatBots.js'
export default pinia