<template>
  <div class="footer" v-show="total" >
  <label>
    <!-- <input type="checkbox" :checked="isAll" @change="checkAll"/> -->
    <input type="checkbox" :checked="isAll" @change="checkAll"/>
  </label>
  <span>
    <span>已完成{{doneTotal}}</span> / 全部{{total}}
  </span>
  <button @click="clearAll">清除已完成任务</button>
</div>
</template>

<script>
export default {
  name: 'MyFooter',
  props: ['todos', 'checkAllTodo', 'clearAllTodo'],
  computed: {
    total () {
      return this.todos.length
    },
    doneTotal () {
      //  this.todos.reduce((pre,current) => {
      //   console.log('@')
      //   return pre + (current.done? 1 : 0)
      // },0)
      return this.todos.reduce((pre, todo) => pre + (todo.done ? 1 : 0), 0)
    },
    isAll () {
      return this.doneTotal === this.total && this.total > 0
    }
  },
  methods: {
    checkAll (e) {
      this.checkAllTodo(e.target.checked)
    },
    clearAll () {
      this.clearAllTodo()
    }
  }
}
</script>

<style scoped>
</style>
