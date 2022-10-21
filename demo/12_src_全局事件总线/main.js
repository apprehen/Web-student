//  引入Vue
import Vue from 'vue'
//  引入App
import App from './App.vue'
//  import plugins from './plugins'
//  关闭Vue生产提示
Vue.config.productionTip = false

// Vue.prototype.x = {a: 1, b: 2}
// const Demo = Vue.extend({})
// const d = new Demo()
// Vue.prototype.x = d
//  创建vm
new Vue ({
  el:'#app',
  render:h =>h(App),
  beforeCreate () {
    Vue.prototype.$bus = this// 安装全局事件总线  
  }
})
