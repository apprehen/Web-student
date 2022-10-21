<template>
  <div>
    <h2 @click="showName">学校名称：{{name}}</h2>
    <h2>学校地址：{{address}}</h2>
  </div>
</template>

<script>
//  引入一个huhe
//  import {huhe, huhe2} from '../mixin'
export default {
  name: 'School',
  data () {
    return {
      name: 'HDU',
      address: '杭州'
    }
  }
//  mixins: [huhe, huhe2]
}
</script>

<style>

</style>
