<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition name="hello" appear>
      <h1 v-show="isShow">你好啊</h1>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Test',
  data () {
    return {
      isShow: true
    }
  }
}
</script>

<style scoped>
  h1{
    background-color: pink;
  }
  .hello-enter-active{
    animation: atguigu 1s linear;
  }
  .hello-leave-active{
    animation: atguigu 1s reverse;
  }
  @keyframes atguigu{
    from{
      transform: translateX(-100%);
    }
    to{
      transform: translateX(0px);
    }
  }
</style>
