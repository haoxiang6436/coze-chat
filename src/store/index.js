import { createPinia } from "pinia"
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
export * from './modules/user.js'
export default pinia