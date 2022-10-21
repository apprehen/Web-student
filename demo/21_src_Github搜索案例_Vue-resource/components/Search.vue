<template>
  <div class="ser">
      <p>Search Github Users</p>
      <input type="text" placeholder="enter the name you search" v-model="keyWord">
      <button @click="searchUsers">Search</button>
  </div>
</template>

<script>
export default {
  name: 'Search',
  data () {
    return {
      keyWord: ''
    }
  },
  methods: {
    searchUsers () {
      //  请求前更新List数据
      this.$bus.$emit('updataListData', {isFirst: false, isLoading: true, errMsg: '', users: []})
      this.$http.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
        response => {
          console.log('请求成功了')
          //  请求成功后更新List的数据
          this.$bus.$emit('updataListData', {isLoading: false, errMsg: '', users: response.data.items})
        },
        error => {
          //  请求失败后更新List的数据
          this.$bus.$emit('updataListData', {isLoading: false, errMsg: error.message, users: []})
        }
      )
    }
  }
}
</script>

<style>
.ser{
  /* background-color: aqua; */
  width: 600px;
  margin: 50px 480px;
  height: 150px;
  text-align: center;
  /* 开启元素bfc，防止外边距折叠 */
  overflow: hidden;
  position: relative;
}
.ser p{
  width: 600px;
  height: 30px;
  line-height: 30px;
  margin-top: 20px;
  text-align: center;
}
.ser input{
  margin-bottom: 20px;
  font-size: 16px;
  height: 30px;
  width: 300px;
  position: absolute;
  left: 100px;
  outline: none;
}
.ser button{
  height: 30px;
  width: 85px;
  text-align: center;
  position: absolute;
  left: 430px;
  background-color: skyblue;
  border-radius: 5px;
}
</style>
