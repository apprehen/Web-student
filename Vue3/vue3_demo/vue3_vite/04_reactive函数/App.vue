<template>
  <h1>我是APP组件</h1>
  <h2>姓名：{{ person.name }}</h2>
  <h2>年龄：{{ person.age }}</h2>
  <h1>工作类型:{{ person.job.type }}</h1>
  <h1>工作薪水；{{ person.job.salary }}</h1>
  <button @click="changeName">修改个人信息</button>
</template>

<script>
import { ref,reactive } from 'vue'
export default {
  name: 'App',
  setup () {
    // 数据
    // let name = ref('张三')
    // let age = ref(18)
    // let job = reactive({
    //   type: '前端工程师',
    //   salary: 10000 
    // })
    let person = reactive({
      name: '张三',
      age: 18,
      job: {
        type: '前端工程师',
        salary: 10000 
      }
    })
    // 方法
    function changeName() {
      console.log('修改个人信息')
      person.age = 20
      person.name = '李四'
      person.job.type = '后端工程师'
      person.job.salary = 20000
    }
    return {
      person,
      changeName
    }
  }
}
</script>
