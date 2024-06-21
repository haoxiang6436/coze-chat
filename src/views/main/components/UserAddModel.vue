<template>
  <div>
    <el-dialog v-model="dialogVisible" title="添加/修改模型" @close="resetForm">
      <el-table :data="ChatBots" border style="width: 100%; margin-bottom: 20px;">
        <el-table-column prop="model_id" label="模型ID">
          <template #default="scope">
            <el-input placeholder="ID必填" v-model="scope.row.model_id" ></el-input>
          </template>
        </el-table-column>
        <el-table-column prop="model_name" label="模型名">
          <template #default="scope">
            <el-input placeholder="模型名可选" v-model="scope.row.model_name" ></el-input>
          </template>
        </el-table-column>
        <el-table-column prop="" label="操作" width="85px">
          <template #default="scope">
            <el-button @click="DelModelItem(scope.row)" >删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div slot="footer" class="dialog-footer">
        <el-button @click="AddModel" type="primary" >添加</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { ElMessage, ElDialog, ElButton, ElFormItem, ElInput, ElForm, ElTable, ElTableColumn, ElMessageBox } from 'element-plus';
import { useChatBotsStore } from '~/store';
const ChatBotsStore = useChatBotsStore()
const { ChatBots } = storeToRefs(ChatBotsStore)
const dialogVisible = ref(false);
let oldModelSum = 0; 
const openDialog = () => {
  dialogVisible.value = true;
  oldModelSum = ChatBots.value.length
};
const AddModel = () => {
  ChatBots.value.push({
    model_id: '',
    model_name: ''
  })
}
const DelModelItem = (row) => {
  if (ChatBots.value.length === 1) {
    ElMessage.warning('模型至少保留一项')
    return
  }
  ElMessageBox.confirm(
    '你确定要删除此模型吗?此操作不可撤销',
    '删除此模型',
    {
      confirmButtonText: '是的',
      cancelButtonText: '算了',
      type: 'warning',
    }
  )
    .then(() => {
      const index = ChatBots.value.findIndex(model => model.model_id === row.model_id);
      if (index !== -1) {
        ChatBots.value.splice(index, 1);
      }
    })
}
const resetForm = () => {
  // 19
  ChatBots.value = processModels(ChatBots.value)
  let num = ChatBots.value.length - oldModelSum;
  ChatBotsStore.SelectedModel = ChatBotsStore.ChatBots[0].model_id
  if (num === 0) return
  if (num > 0) {
    ElMessage.success(`${'模型信息新增'+num+'项'}`);
    return
  }
  ElMessage.warning(`${'模型信息减少'+Math.abs(num)+'项'}`);
};
function processModels(models) {
  return models
    .filter(model => model.model_id !== '') // 保留id为19位的项
    .map((model, index) => {
      if (!model.model_name) {
        model.model_name = `模型（${index + 1}）`; // 将name赋值为序号
      }
      return model;
    });
}
defineExpose({
  openDialog
})
</script>

<style scoped>
.dialog-footer {
  text-align: right;
}
</style>


