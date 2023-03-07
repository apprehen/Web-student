<template>
  <h1>我是APP组件</h1>
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <!-- <button @click="sayHello">点击我说话</button> -->
  <h1>工作类型:{{ job.type }}</h1>
  <h1>工作薪水；{{ job.salary }}</h1>
  <button @click="changeName">修改个人信息</button>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'App',
  setup () {
    // 数据
    let name = ref('张三')
    let age = ref(18)
    let job = ref({
      type: '前端工程师',
      salary: 10000 
    })
    // 方法
    function  sayHello(params) {
      alert(`我是${name},今年${age}岁`)
    }
    function changeName() {
      console.log('修改个人信息')
      age.value = 20
      name.value = '李四'
      job.value.type = '后端工程师'
      job.value.salary = 20000
    }
    return {
      name,
      age,
      sayHello,
      changeName
    }
  }
}
</script>
