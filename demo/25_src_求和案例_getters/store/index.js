//  该文件用于创建Vuex中最为核心的store

//  引入Vue
import Vue from 'vue'
//  引入Vuex
import Vuex from 'vuex'
//  应用Vuex插件
Vue.use(Vuex)
//  准备actions--用于响应组件中的动作
const actions = {
  // jia (context, value) {
  //   console.log('actions有反应辣', context, value)
  //   context.commit('JIA', value)
  // },
  // jian (context, value) {
  //   console.log('jian被调用辣')
  //   context.commit('JIAN', value)
  // },
  jiaOdd (context, value) {
    console.log('jiaOdd被调用辣', context, value)
    if (context.state.sum % 2) {
      context.commit('JIA', value)
    }
  },
  jiaWait (context, value) {
    console.log('Wait被调用辣')
    setTimeout(() => {
      context.commit('JIA', value)
    }, 500)
  }
}
//  准备mutations--用于操作数据(state)
const mutations = {
  JIA (state, value) {
    console.log('mutations被调用辣', state, value)
    state.sum += value
  },
  JIAN (state, value) {
    console.log('JIAN被调用辣', state, value)
    state.sum -= value
  }
}
//  准备state--用于储存数据
const state = {
  sum: 0//  当前的和
}
const getters = {
  bigSum (state) {
    return state.sum * 10
  }
}

//  创建并暴露store
export default new Vuex.Store({
  actions,
  mutations,
  state,
  getters
})
