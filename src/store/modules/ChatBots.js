import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useChatBotsStore = defineStore('ChatBots', () => {
  const SelectedModel = ref('');
  const ChatBots = ref([
    { model_id: '123456789', model_name: '🚫此选项无法聊天，请自行添加⬇️，感谢理解！' },
  ])
  return {
    SelectedModel,
    ChatBots,
  }
}, {
  persist: import.meta.env.PROD,
})