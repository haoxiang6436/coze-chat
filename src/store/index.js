import { createPinia } from "pinia"
import { createPersistedState } from 'pinia-plugin-persistedstate'
const pinia = createPinia()
pinia.use(createPersistedState({
  key: id => `2024-6-22${id}`,
}))



export * from './modules/user.js'
export * from './modules/ChatBots.js'
export default pinia