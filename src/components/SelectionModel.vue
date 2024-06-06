<template>
  <div class="dropdown">
    <div class="title" style="text-align: start;">
      <h1 class="gradient-text">Welcome<br />完全免费的AI模型集</h1>
      <p>由 coze 提供<br />选择一个模型并开始聊天</p>
    </div>
    <el-select v-model="selected" size="large" placeholder="请选择">
      <el-option :label="item.model_name" :value="item.model_id" v-for="item in option" :key="item.model_id">
      </el-option>
    </el-select>
    <el-button type="primary" size="large" style="width: 100%; margin-top: 20px;font-size: large;"
      @click="UpdateModel">开始聊天</el-button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

import { ElSelect, ElOption, ElButton } from 'element-plus';
const option = [
  { model_id: '7377237618943229953', model_name: 'ChatGPT-4o' },
  { model_id: '7377239308723339265', model_name: 'Gemini 1.5 Flash' },
  { model_id: '7375791394633596945', model_name: 'Gemini 1.5 Pro' },
  { model_id: '7373569051249623045', model_name: 'Midjourney' },
  { model_id: '7373618024450473990', model_name: 'GPT-4o（编程增强）' },
  { model_id: '7373619343466872837', model_name: '多模型混合（论文增强）' },
  { model_id: '7375810282905583633', model_name: 'GPT-4o（Github专家）' },
]
const selected = ref('7377237618943229953');

const emits = defineEmits(['ModelUpdate'])

const UpdateModel = () => {
  emits('ModelUpdate', option.find(item => item.model_id === selected.value))
}
</script>

<style lang="scss" scoped>
.dropdown {
  width: fit-content;
  max-width: 380px;
  transform: translateY(-9.5vh);
  opacity: 0;
  animation: DropdownYuIHsien 0.6s ease-in-out forwards 0.7s;
    :deep(.el-select__wrapper) {
      background: transparent !important;
    }
}

@keyframes DropdownYuIHsien {
  to {
    opacity: 1;
    transform: translateY(-11vh);
  }
}

.gradient-text {
  // font-size: 24px;
  font-weight: bold;
  background: linear-gradient(to right, #4e40e5, #8240e5, #b940e5);
  -webkit-background-clip: text;
  /* 仅适用于 WebKit 浏览器 */
  -moz-background-clip: text;
  /* 仅适用于 Firefox 浏览器 */
  background-clip: text;
  color: transparent;
}
</style>