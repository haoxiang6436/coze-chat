<template>
  <div>
    <SelectionModel @ModelUpdate="model_update"></SelectionModel>
  </div>
</template>

<script setup>
import SelectionModel from './components/SelectionModel.vue'
let client = null;
let SelectModel = null;
const model_update = (model) => {
  init_chat(model)
}
const init_chat = async (model) => {
  if (model.model_id === SelectModel?.model_id) {
    document.querySelector('.d723de158793d39f46fb').click()
    return
  }
  client ? client.destroy() : '';
  client = new CozeWebSDK.WebChatClient({
    config: {
      bot_id: model.model_id,
    },
    componentProps: {
      title: model.model_name,
      layout: 'mobile',
      lang: 'zh-CN'
    },
  });
  setTimeout(() => {
    SelectModel = {...model}
    document.querySelector('.d723de158793d39f46fb').click()
  }, 0)
}
</script>

<style lang="scss"></style>