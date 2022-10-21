<template>
  <div class="student">
    <h2>学生名称：{{name}}</h2>
    <h2>学生性别：{{sex}}</h2>
    <h2>当前求和为{{number}}</h2>
    <button @click="add">点我number++</button>
    <button @click="sendStudentName" >把学生名给App</button>
    <button @click="unbind">解绑atguigu事件</button>
    <button @click="death">销毁当前Student组件的实例(vc)</button>
  </div>
</template>

<script>
export default {
  name: 'School',
  data () {
    return {
      name: '张三',
      sex: '男',
      number: 0
    }
  },
  methods: {
    sendStudentName () {
      //  触发Student组件实例身上的atguigu事件
      this.$emit('atguigu', this.name, 666, 888)
      this.$emit('demo')
    },
    unbind () {
      this.$off('atguigu') //  解绑一个自定义事件
      // this.$off(['atguigu', 'demo']) // 解绑多个自定义事件
      // this.$off()// 解绑所有的自定义事件
    },
    add () {
      console.log('add被调用辣')
      this.number++
    },
    death () {
      this.$destroy()// 销毁当前Student组件的实例,销毁后所有Student实例的自定义事件全都不奏效
    }
  }
}
</script>

<style scoped>
  .student{
    background-color: pink;
    margin-top: 20px;
  }
</style>
