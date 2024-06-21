# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (previously Volar) and disable Vetur

# 说明

## 我的token被刷欠费了，建议使用自己的id（coze有免费额度）😭😭😭

# 指南

## 0、模型id在哪？（详细的）
1. 进入coze官网创建一个自己的bot  
   ![image](https://github.com/haoxiang6436/coze-chat/assets/91372056/fac67c0e-271c-4c35-afaf-c9ab6db60972)  
2. 起一个好听的名字然后点击Confirm下一步  
3. 可以切换一个要使用的模型  
   ![image](https://github.com/haoxiang6436/coze-chat/assets/91372056/247cda4d-7f21-416b-8d85-884cab3bdae6)  
4. 点击Publish发布  
   ![image](https://github.com/haoxiang6436/coze-chat/assets/91372056/742ed911-43f2-4f57-9408-425dff54d3f5)  
5. 确认之后，必须勾选WebSDK  
   ![image](https://github.com/haoxiang6436/coze-chat/assets/91372056/dccaca18-cd4a-406c-a0a9-96d688fd24ae)  
6. 最后点击发布按钮  
7. 复制地址栏中的19位BotId进行使用  
   ![image](https://github.com/haoxiang6436/coze-chat/assets/91372056/4ae55788-9232-4ac5-a6b1-f43e86e7f5ef)  

## 1、导入的json格式
```json
[
  {
      "model_id": "0000000000000000000",
      "model_name": "ChatGPT-4o"
  },
  {
      "model_id": "0000000000000000000",
      "model_name": "Gemini 1.5 Flash"
  },
  {
      "model_id": "0000000000000000000",
      "model_name": "Gemini 1.5 Pro"
  },
  {
      "model_id": "0000000000000000000",
      "model_name": "Midjourney"
  }
]
