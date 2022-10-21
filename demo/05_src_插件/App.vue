<template>
  <div>
  <School/>
  <Student/>
  <hr>
  </div>
</template>

<script>
//  引入Student组件
import School from './components/School.vue'
import Student from './components/Student.vue'
export default {
  name: 'App',
  components: {School, Student}
}
</script>

<style>

</style>
