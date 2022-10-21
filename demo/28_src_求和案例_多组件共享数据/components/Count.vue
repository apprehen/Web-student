<template>
  <div>
    <h1>当前求和为{{sum}}</h1>
    <h3>当前求和放大十倍为{{bigSum}}</h3>
    <h3>欢迎来到{{school}},学习{{subject}}</h3>
    <h3 style="color:red">下方组件的总人数是:{{personList.length}}</h3>
    <select v-model.number="n">
      <option value=1>1</option>
      <option value=2>2</option>
      <option value=3>3</option>
    </select>
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementOdd(n)">当前求和为奇数在加</button>
    <button @click="incrementWait(n)">等一等在加</button>
  </div>
</template>

<script>
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'
export default {
  name: 'Count',
  data () {
    return {
      n: 1 //  用户选择的数字
    }
  },
  computed: {
    //  借助mapState生成计算属性，从state中读取数据.(对象写法)
    /*  ...mapState({he: 'sum', xuexiao: 'school', xueke: 'subject'}), */

    //  借助mapState生成计算属性，从state中读取数据.(数组写法)
    ...mapState(['sum', 'school', 'subject', 'personList']),

    /*  ---------------------------------------------------------------------------------------  */
    // 借助mapGetters生成计算属性，从getters中读取数据.(对象写法)
    // ...mapGetters({bigSum: 'bigSum'}),
    // 借助mapGetters生成计算属性，从getters中读取数据.(数组写法)
    ...mapGetters([ 'bigSum' ])
  },
  methods: {
    //  借助mapMutations生成对应的方法，方法中会调用commit去联系mutations(对象写法)
    ...mapMutations({increment: 'JIA', decrement: 'JIAN'}),

    //  借助mapMutations生成对应的方法，方法中会调用commit去联系mutations(数组写法)
    // ...mapMutations(['JIA', 'JIAN']),
    /* -------------------------------------------------------------------------------------------- */
    //  借助mapActions生成对应的方法，方法中会调用dispatch去练习actions(对象写法)
    ...mapActions({incrementOdd: 'jiaOdd', incrementWait: 'jiaWait'})
    //  借助mapActions生成对应的方法，方法中会调用dispatch去练习actions(对象写法)
    // ...mapActions(['jiaOdd', 'jiaWait'])
  }
}
</script>

<style>

</style>
