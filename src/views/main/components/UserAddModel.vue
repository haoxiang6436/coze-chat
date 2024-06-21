<template>
  <div>
    <el-dialog v-model="dialogVisible" title="添加/修改模型" @close="resetForm">
      <el-table :data="ChatBots" border style="width: 100%; margin-bottom: 20px;">
        <el-table-column prop="model_id" label="模型ID">
          <template #default="scope">
            <el-input placeholder="ID必填" v-model="scope.row.model_id"></el-input>
          </template>
        </el-table-column>
        <el-table-column prop="model_name" label="模型名">
          <template #default="scope">
            <el-input placeholder="模型名可选" v-model="scope.row.model_name"></el-input>
          </template>
        </el-table-column>
        <el-table-column prop="" label="操作" width="58px">
          <template #default="scope">
            <!-- <el-button @click="DelModelItem(scope.row)" >删除</el-button> -->
            <el-button @click="DelModelItem(scope.row)" type="danger" :icon="Delete" circle />
          </template>
        </el-table-column>
      </el-table>
      <div slot="footer" class="dialog-footer">
        <el-button @click="ImportJsonModelData" type="primary">导入模型json</el-button>
        <el-button @click="AddModel" type="primary">添加模型</el-button>
        <el-button @click="dialogVisible = false" type="primary">保存并关闭</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { ElMessage, ElDialog, ElButton, ElInput, ElTable, ElTableColumn, ElMessageBox } from 'element-plus';
import { Delete } from '@element-plus/icons-vue'
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
  if (ChatBots.value[ChatBots.value.length - 1].model_id === '') return
  processModels()
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
  processModels()
  let num = ChatBots.value.length - oldModelSum;
  ChatBotsStore.SelectedModel = ChatBotsStore.ChatBots[0].model_id
  if (num === 0) return
  if (num > 0) {
    ElMessage.success(`${'模型信息新增' + num + '项'}`);
    return
  }
  ElMessage.warning(`${'模型信息减少' + Math.abs(num) + '项'}`);
};
const ImportJsonModelData = async () => {
  const ModelData = await getModelDataFile()
  console.log(ModelData);
  ChatBots.value.push(...ModelData)
}
function getModelDataFile() {
  return new Promise((resolve, reject) => {
    // 创建一个隐藏的 input 元素
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = '.json';

    // 监听文件选择事件
    fileInput.addEventListener('change', function (event) {
      const file = event.target.files[0];
      // 检查文件类型
      if (file && file.type === "application/json") {
        const reader = new FileReader();
        // 定义文件读取完成后的回调函数
        reader.onload = function (e) {
          try {
            // 解析JSON内容
            const jsonData = JSON.parse(e.target.result);
            // 返回解析后的JSON内容
            resolve(jsonData);
          } catch (error) {
            console.error("Error parsing JSON:", error);
            reject(new Error("Invalid JSON file"));
          }
        };
        // 读取文件内容
        reader.readAsText(file);
      } else {
        reject(new Error("Invalid file type"));
      }
    });

    // 模拟点击隐藏的 input 元素
    fileInput.click();
  });
}
function processModels() {

  ChatBots.value = ChatBots.value
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
