<template>
  <div class="school">
    <h2>学校名称：{{name}}</h2>
    <h2>学校地址：{{address}}</h2>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
  name: 'School',
  props: ['getSchoolName'],
  data () {
    return {
      name: 'HDU',
      address: '杭州'
    }
  },
  mounted () {
    // console.log('School', this.x)
    // this.$bus.$on('hello', (data) => {
    //   console.log('我是School组件收到数据', data)
    // })
    this.pubId = pubsub.subscribe('hello', (msgName, data) => {
      console.log('有人发布了hello消息，hello消息的回调执行了', msgName, data)
    })
  },
  beforeDestroy () {
    // this.$bus.$off('hello')
    pubsub.unsubscribe(this.pubId)
  }
}
</script>

<style scoped>
  .school{
    background-color: skyblue;
    margin-top: 20px;
  }
</style>
