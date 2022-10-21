<template>
  <div>
  <Student name="李四" :age="18" sex="女" />
  <hr>
  </div>
</template>

<script>
//  引入Student组件
import Student from './components/Student.vue'
export default {
  name: 'App',
  components: {Student}
}
</script>

<style>

</style>
