<template>
  <div class="dropdown">
    <div class="title" style="text-align: start;">
      <h1>完全免费的AI集</h1>
      <p>由coze提供<br/>请选择一个模型并开始聊天</p>
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
  { model_id: '7373565628655058950', model_name: 'ChatGPT-4o' },
  { model_id: '7373569051249623045', model_name: 'Midjourney' },
  { model_id: '7373618024450473990', model_name: 'GPT-4o（编程增强）' },
  { model_id: '7373619343466872837', model_name: '多模型混合（论文增强）' },
]
const selected = ref('7373565628655058950');

const emits = defineEmits(['Update'])

const UpdateModel = () => {
  // const CheckedModel = ) 
  // if (!CheckedModel) return
  emits('Update', option.find(item=>item.model_id===selected.value))
}
</script>

<style lang="scss" scoped>
.dropdown {
  // position: fixed;
  // top: 5vh;
  // left: 50vw;
  width: fit-content;
  max-width: 320px;
  transform: translateY(-11vh);

}
</style>