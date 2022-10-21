<template>
  <!-- 组件的结构 -->
  <div class="Demo">
    <h2>学生姓名：{{studentName}}</h2>
    <h2>年龄：{{age}}</h2>
  </div>
</template>

<script>
export default {

  name: 'School',
  data () {
    return {
      studentName: '张三',
      age: 18
    }
  }
}
</script>

<style scoped>
  /*组件的样式*/
  .Demo{
    background-color: orange;
  }
</style>
