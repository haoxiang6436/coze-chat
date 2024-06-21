<template>
  <div class="LoginView" v-loading="loading">
    <h1>使用密钥登录</h1>
    <el-input size="large" placeholder="输入密钥" v-model="FormData.password" @keyup.enter="Login"></el-input>
    <el-button @click="Login" type="primary" size="large" style="width: 100%;font-size: large;">登录</el-button>
  </div>
</template>

<script setup>
import { ElInput, ElButton, ElMessage,ElLoading } from 'element-plus';
import { useRouter } from 'vue-router';
import { useUserDataStore } from '~/store';
import { ref } from 'vue';
const FormData = ref({
  password: ''
})
// 指令
const VLoading = ElLoading.directive
const loading = ref(false)
const UserDataStore = useUserDataStore()
const router = useRouter()
// withDirectives
const Login = () => {
  if (FormData.value.password === import.meta.env.VITE_SECRET_KEY_CODE) {
    UserDataStore.setUserConfig('SecretKeyCode', FormData.value.password)
    ElMessage.success('验证成功')
    loading.value = true
    router.replace('/');
    return
  }
  ElMessage.warning('密钥无效')
}
</script>

<style lang="scss" scoped>
.LoginView {
  width: 400px;
  height: 300px;

  @media (max-width: 768px) {
    width: 70vw;
    height: 30vh;
    max-height: 270px;
  }

  padding: 30px 50px;
  display: flex;

  &>div {
    margin: 20px 0;
  }

  flex-flow: column nowrap;
  align-items: start;
  background-color: #fff;
  box-shadow: 5px 5px 15px #eee;
  border-radius: 5px;
}
</style>