// 引入的不再是Vue构造函数，而是createApp的工厂函数
import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

// createApp(App).mount('#app')

// 创建应用实例对象 -- app(类似于vue2中的vm，但app比vm更轻量) 
const app = createApp(App)

// 挂载
app.mount('#app')
// console.log(app)
