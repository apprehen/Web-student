<template>
  <div class="school">
    <h2>学校名称：{{name}}</h2>
    <h2>学校地址：{{address}}</h2>
  </div>
</template>

<script>
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
    this.$bus.$on('hello', (data) => {
      console.log('我是School组件收到数据', data)
    })
  },
  beforeDestroy () {
    this.$bus.$off('hello')
  }
}
</script>

<style scoped>
  .school{
    background-color: skyblue;
    margin-top: 20px;
  }
</style>
