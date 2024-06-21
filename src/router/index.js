import { createWebHashHistory, createRouter } from 'vue-router'
// import { ElLoading } from 'element-plus';
import { useUserDataStore } from '~/store';
// const loadingInstance = null
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/login', component: () => import('~/views/login/index.vue') },
    { path: '/', component: () => import('~/views/main/index.vue') },
  ],
})

router.beforeEach((to, from) => {
  const UserDataStore = useUserDataStore()
  const KEY = import.meta.env.VITE_SECRET_KEY_CODE
  if (import.meta.env.VITE_PWD_VIC==="false") return true
  if ((KEY !== UserDataStore.UserConfig.SecretKeyCode) && (to.path !== '/login')) {
    console.log('未登录');
    return '/login'
  }
})

// router.afterEach((to, from) => {
//   // sendToAnalytics(to.fullPath)
//   // loadingInstance.close()
// })

export default router