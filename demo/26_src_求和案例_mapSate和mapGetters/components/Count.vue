<template>
  <div>
    <h1>当前求和为{{sum}}</h1>
    <h3>当前求和放大十倍为{{bigSum}}</h3>
    <h3>欢迎来到{{school}},学习{{subject}}</h3>
    <select v-model.number="n">
      <option value=1>1</option>
      <option value=2>2</option>
      <option value=3>3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">当前求和为奇数在加</button>
    <button @click="incrementWait">等一等在加</button>
  </div>
</template>

<script>
import {mapState, mapGetters} from 'vuex'
export default {
  name: 'Count',
  data () {
    return {
      n: 1 //  用户选择的数字
    }
  },
  computed: {
    //  靠程序员自己亲自去写计算属性
    // he () {
    //   return this.$store.state.sum
    // },
    // xuexiao () {
    //   return this.$store.state.school
    // },
    // xueke () {
    //   return this.$store.state.subject
    // },
    //  借助mapState生成计算属性，从state中读取数据.(对象写法)
    /*  ...mapState({
      he: 'sum',
      xuexiao: 'school',
      xueke: 'subject'
    }), */

    //  借助mapState生成计算属性，从state中读取数据.(数组写法)
    ...mapState(['sum', 'school', 'subject']),

    /*  ---------------------------------------------------------------------------------------  */
    // bigSum () {
    //   return this.$store.getters.bigSum
    // }
    // 借助mapGetters生成计算属性，从getters中读取数据.(对象写法)
    ...mapGetters({bigSum: 'bigSum'}),
    // 借助mapGetters生成计算属性，从getters中读取数据.(数组写法)
    ...mapGetters([ 'bigSum' ])
  },
  methods: {
    increment () {
      this.$store.commit('JIA', this.n)
    },
    decrement () {
      this.$store.commit('JIAN', this.n)
    },
    incrementOdd () {
      this.$store.dispatch('jiaOdd', this.n)
    },
    incrementWait () {
      this.$store.dispatch('jiaWait', this.n)
    }
  }
}
</script>

<style>

</style>
