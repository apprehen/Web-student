<template>
<div>
  <div class="title">
    <h2>Vue Router Demo</h2>
  </div>
  <div class="container">
    <div class="left">
      <!-- 原始html中我们使用a标签实现页面的跳转 -->
      <!-- <a href="./about.html">about</a>
      <a href="./home.html">home</a> -->
      <!-- Vue中借助router-link标签实现路由的切换 -->
      <router-link to="/about" active-class="CHAO">about</router-link>
      <router-link to="/home" active-class="CHAO">home</router-link>
    </div>
    <div class="right">
        <!-- 指定组件的呈现位置 -->
        <router-view></router-view>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  .title{
    text-align: center;
    width: 500px;
    height: 50px;
    background-color: red;
    margin-left: 500px;
    margin-top: 40px;
  }
  .container{
    width: 800px;
    height: 150px;
    /* background-color: aqua; */
    margin-top: 100px;
    display: flex;
    margin-left: 358px;
}
  .left a{
    display: block;
    line-height:70px;
    width: 300px;
    /* background-color: crimson; */
    margin-bottom: 6px;
    text-align: center;
    font-size: 36px;
    text-decoration: none;
    color: rgb(11, 10, 10);
    background-color: #bfa;
  }
  .right{
    line-height: 80px;
    width: 500px;
    background-color: cornflowerblue;
    text-align: center;
  }
  .CHAO{
    background-color: aquamarine;
  }
</style>
