<template>
<div>
  <h2>我是home中的内容</h2>
  <ul>
    <li class="top">
      <router-link to='/home/news'>News</router-link>
    </li>
    <li class="top">
      <router-link to='/home/message'>Message</router-link>
    </li>
  </ul>
  <router-view></router-view>
</div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style>
  .top{
    float: left;
    width: 200px;
    height: 50px;
    background-color: orange;
    line-height: 50px;
    text-align: center;
  }
  .top a{
    display: block;
    text-decoration: none;
  }
</style>
