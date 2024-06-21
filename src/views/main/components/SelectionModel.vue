<template>
  <div class="dropdown">
    <div class="title" style="text-align: start;">
      <h1 class="gradient-text">Welcome<br />完全免费的AI模型集</h1>
      <p>由 coze 提供<br />选择一个模型并开始聊天</p>
    </div>
    <el-select v-model="ChatBotsStore.SelectedModel" size="large" placeholder="请选择">
      <el-option :label="item.model_name" :value="item.model_id" v-for="item in ChatBotsStore.ChatBots"
        :key="item.model_id">
      </el-option>
      <el-option @click.stop="AddUserInputNewBot" :label="'➕添加/修改模型'" :value="'addNewBot'">
      </el-option>
    </el-select>
    <el-button type="primary" size="large" style="width: 100%; margin-top: 20px;font-size: large;"
      @click="UpdateModel">开始聊天</el-button>
  </div>
  <UserAddModel ref="UserAddModelRef"></UserAddModel>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useChatBotsStore,useUserDataStore } from '~/store';
import { ElSelect, ElOption, ElButton,ElMessageBox } from 'element-plus';
import UserAddModel from './UserAddModel.vue';
const ChatBotsStore = useChatBotsStore()
const UserDataStore = useUserDataStore()
const UserAddModelRef = ref('');
const emits = defineEmits(['ModelUpdate'])

const UpdateModel = () => {
  if (ChatBotsStore.SelectedModel === 'addNewBot') {
    return
  }
  emits('ModelUpdate', ChatBotsStore.ChatBots.find(item => item.model_id === ChatBotsStore.SelectedModel))
}

const AddUserInputNewBot = () => {
  ChatBotsStore.SelectedModel = ChatBotsStore.ChatBots[0].model_id
  UserAddModelRef.value.openDialog()
}
onMounted(() => {
  ChatBotsStore.SelectedModel = ChatBotsStore.ChatBots[0].model_id
  console.log(UserDataStore.UserConfig.NewUsers);
  if (UserDataStore.UserConfig.NewUsers) {
    ElMessageBox.alert('如果遇到AI回答为空，很可能由于作者账户token欠费，请前往coze创建机器人并勾选web sdk添加机器人id。并在添加模型中使用它。它是有免费额度的！', '提示', {
      confirmButtonText: 'OK',
    })
  }
  UserDataStore.UserConfig.NewUsers = false
})
</script>

<style lang="scss" scoped>
.dropdown {
  width: fit-content;
  max-width: 380px;
  transform: translateY(-9.5vh);
  opacity: 0;
  animation: DropdownYuIHsien 0.4s ease-in-out forwards 0.7s;

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