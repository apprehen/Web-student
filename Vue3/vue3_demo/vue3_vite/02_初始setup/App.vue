<template>
  <h1>我是APP组件</h1>
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <button @click="sayHello">点击我说话</button>
</template>

<script>
import { h } from 'vue'
export default {
  name: 'App',
  setup () {
    // 数据
    let name = '张三'
    let age = 18
    // 方法
    function  sayHello(params) {
      alert(`我是${name},今年${age}岁`)
    }
    // 返回一个对象
    // return {
    //   name,
    //   age,
    //   sayHello
    // }
    // 返回一个函数(渲染函数)
    return () => h('h1','哈哈哈')
  }
}
</script>
