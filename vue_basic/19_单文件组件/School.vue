<template>
  <!-- 组件的结构 -->
  <div class="Demo">
    <h2>学校名称：{{schoolName}}</h2>
    <h2>学校地址：{{address}}</h2>
    <button @click="showName">点我提示学校名</button>
  </div>
</template>

<script>
export default {
  //组件交互的代码(数据、方法等等)
  name:'School',
  data(){
    return {
      schoolName:'尚硅谷',
      address:'北京昌平'
    }
  },
  methods:{
    showName(){
      alert(this.showName)
    }
  },
}
</script>

<style scoped>
  /*组件的样式*/
  .Demo{
    background-color: orange;
  }
</style>
