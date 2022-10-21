<template>
  <div>
    <h1>{{msg}}</h1>
    <h2>学生名称：{{name}}</h2>
    <h2>学生性别：{{sex}}</h2>
    <h2>学生年龄：{{myAge}}</h2>
    <button @click="updataAge">尝试修改收到的年龄</button>
  </div>
</template>

<script>
export default {
  name: 'School',
  data () {
    return {
      msg: '我是一个HDU的学生',
      myAge: this.age
    }
  },
  methods: {
    updataAge () {
      this.myAge++
    }
  },
  //  简单声明接收
  //  props: ['name', 'age', 'sex']
  //  接收的同时对数据进行类型限制
  // props: {
  //   name: String,
  //   age: Number,
  //   sex: String
  // }
  //  接收的同时对数据：进行类型限制+默认值的指定+必要性的限制
  props: {
    name: {
      type: String, // name的类型是字符串
      required: true // name是必要的
    },
    age: {
      type: Number,
      default: 99 //  默认值
    },
    sex: {
      type: String,
      required: true
    }
  }
}
</script>

<style>

</style>
