<template>
  <div>
    <SelectionModel @Update="model_update"></SelectionModel>
  </div>
</template>

<script setup>
import SelectionModel from './components/SelectionModel.vue'
let client = null;
const model_update = (model) => {
  console.log(model);
  init_chat(model)

}
const init_chat = async (model) => {
  client?client.destroy():'';
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
  setTimeout(()=>{
    document.querySelector('.d723de158793d39f46fb').click()
  },0)
}
</script>

<style lang="scss">
</style>