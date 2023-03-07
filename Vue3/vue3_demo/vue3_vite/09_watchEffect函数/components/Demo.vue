<template>
  <h1>{{ sum }}</h1>
  <button @click="sum++">点我＋1</button>
  <hr>
  <h1> {{ msg }}</h1>
  <button @click="msg += '!'">点我改变msg</button>
  <hr>
  <h2>姓名：{{ person.name }}</h2>
  <h2>年龄：{{ person.age }}</h2>
  <button @click="person.name +='~'"> 修改姓名 </button>
  <button @click="person.age++"> 增长年龄 </button >
</template>

<script>
import { ref,watch,reactive,watchEffect } from 'vue'
export default {
  name: 'Demo',
  setup (props, context) {
    let sum = ref(0)
    let msg = ref('你好啊')
    let person = reactive({
      name: '张三',
      age: 20,
      job: {
        j1:{
          salary: 20
        }
      }
    })
    // watch(sum, (newVal, oldVal) => {
    //   console.log('sum发生了变化', newVal, oldVal)
    // }, {immediate: true})
    watchEffect(() => {
      const x1 = sum.value
      console.log('watchEffect执行了')
    })
    return {
      sum, 
      msg,
      person
    }
  }
}
</script>
