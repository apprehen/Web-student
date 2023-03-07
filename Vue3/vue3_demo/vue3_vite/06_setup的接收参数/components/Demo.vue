<template>
  <h2>姓名：{{ person.name }}</h2>
  <h2>年龄：{{ person.age }}</h2>
</template>

<script>
import { reactive } from 'vue'
export default {
  name: 'Demo',
  props: {
    msg: String,
    name: String
  },
  setup (props, context) {
    console.log(props)
    console.log(context)
    let person = reactive({
      name: '张三',
      age: 18,
    })
    return {
      person,
    }
  }
}
</script>
