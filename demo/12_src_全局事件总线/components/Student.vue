<template>
  <div class="student">
    <h2>学生名称：{{name}}</h2>
    <h2>学生性别：{{sex}}</h2>
    <button @click="sendStudentName">把学生名给School组件</button>
  </div>
</template>

<script>
export default {
  name: 'School',
  data () {
    return {
      name: '张三',
      sex: '男'
    }
  },
  mounted () {
    // console.log('Student', this.x)
  },
  methods: {
    sendStudentName () {
      this.$bus.$emit('hello', this.name)
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
