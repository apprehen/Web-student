//  引入Vue
import Vue from 'vue'
//  引入App
import App from './App.vue'
import {huhe, huhe2} from './mixin.js'
//  关闭Vue生产提示
Vue.config.productionTip = false
Vue.mixin(huhe)
Vue.mixin(huhe2)
//  创建vm
new Vue ({
  el:'#app',
  render:h =>h(App)
})
