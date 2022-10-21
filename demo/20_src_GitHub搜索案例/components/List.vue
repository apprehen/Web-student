<template>
  <div class="banner">
    <!-- 展示用户列表 -->
    <div v-show="info.users.length" class="item" v-for="user in info.users" :key="user.login">
      <a :href="user.html_url" target="_blank">
      <img :src="user.avatar_url" style="width: 120px" />
      </a>
      <p>{{user.login}}</p>
    </div>
    <!-- 展示欢迎词 -->
    <h1 v-show="info.isFirst">Welcome to use</h1>
    <!-- 展示加载中 -->
    <h1 v-show="info.isLoading">Wait Loading</h1>
    <!-- 展示错误消息 -->
    <h1 v-show="info.errMsg">{{info.errMsg}}</h1>

  </div>
</template>

<script>
export default {
  name: 'List',
  data () {
    return {
      info: {
        isFirst: true,
        isLoading: false,
        errMsg: '',
        users: []
      }
    }
  },
  mounted () {
    this.$bus.$on('updataListData', (dataObj) => {
      // console.log('我是List组件，收到数据:', users)
      // this.users = user
      this.info = {...this.info, ...dataObj}
      console.log(this)
    })
  }
}
</script>

<style>
  .banner{
    width: 80%;
    height: 500px;
    margin-left: 10%;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
  }
  .item{
    width: 250px;
    height: 160px;
    border: 1px gray solid;
    position: relative;
  }
  .item a img{
    position: absolute;
    top: 10px;
    left: 70px;
    vertical-align: top;
  }
  .item p{
    position: absolute;
    bottom: -16px;
    font-size: 18px;
    left: 50%;
    transform: translateX(-50%);
  }
</style>
