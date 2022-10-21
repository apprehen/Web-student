<template>
  <div>
    <h2 @click="showName">学生名称：{{name}}</h2>
    <h2>学生性别：{{sex}}</h2>
  </div>
</template>

<script>
//  import {huhe, huhe2} from '../mixin'
export default {
  name: 'School',
  data () {
    return {
      name: '张三',
      sex: '男'
    }
  }
//  mixins: [huhe, huhe2]
}
</script>

<style>

</style>
