<template>
<div class="container">
  <Category title="美食">
    <img src="./assets/1.png">
  </Category>
  <Category title="游戏">
    <ul>
      <li v-for="(g, index) in games" :key="index">{{g}}</li>
    </ul>
    </Category>
  <Category title="电影">
    <video controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
  </Category>
</div>
</template>

<script>
import Category from './components/Category.vue'

export default {
  name: 'App',
  components: { Category },
  data () {
    return {
      foods: ['火锅', '烧烤', '小龙虾', '牛排'],
      games: [ '红色警戒', '最终幻想14', '古墓丽影', '明日方舟' ],
      films: [ '《教父》', '《拆弹专家》', '《你好，李焕英》', '《紫罗兰的永恒花园》' ]
    }
  }
}
</script>
<style>
  .container{
    display: flex;
    justify-content: space-around;
  }
  img{
    width: 100%;
  }
  video{
    width: 100%;
  }
</style>
