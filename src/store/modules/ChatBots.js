import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useChatBotsStore = defineStore('ChatBots', () => {
  const SelectedModel = ref('');
  const ChatBots = ref([
    { model_id: '7377237618943229953', model_name: 'ChatGPT-4o' },
    { model_id: '7377239308723339265', model_name: 'Gemini 1.5 Flash' },
    { model_id: '7375791394633596945', model_name: 'Gemini 1.5 Pro' },
    { model_id: '7373569051249623045', model_name: 'Midjourney' },
    { model_id: '7373619343466872837', model_name: '多模型混合（论文增强）' },
    { model_id: '7375810282905583633', model_name: 'GPT-4o（Github专家）' },
  ]
  )
  return {
    SelectedModel,
    ChatBots,
  }
}, {
  persist: import.meta.env.PROD
})