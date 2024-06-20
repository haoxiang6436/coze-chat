import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useUserDataStore = defineStore('UserData', () => {
  const UserConfig = ref({
    SecretKeyCode: ''
  })
  const setUserConfig = (key, val) => {
    UserConfig.value[key] = val
    console.log(UserConfig.value.SecretKeyCode);
  }
  return {
    UserConfig,
    setUserConfig
  }
}, {
  persist: true
})