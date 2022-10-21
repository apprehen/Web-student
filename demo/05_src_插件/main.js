//  引入Vue
import Vue from 'vue'
//  引入App
import App from './App.vue'
import plugins from './plugins'
//  关闭Vue生产提示
Vue.config.productionTip = false

//  使用插件
Vue.use(plugins)
//  创建vm
new Vue ({
  el:'#app',
  render:h =>h(App)
})
