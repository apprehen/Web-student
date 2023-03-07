<template>
  <h1>{{ sum }}</h1>
  <button @click="sum++">点我＋1</button>
  <hr>
  <h1> {{ msg }}</h1>
  <button @click="msg += '!'">点我改变msg</button>
  <hr>
  <h2>姓名：{{ person.name }}</h2>
  <h2>年龄：{{ person.age }}</h2>
  <button @click="person.name +='~'"> 修改姓名 </button>
  <button @click="person.age++"> 增长年龄 </button >
</template>

<script>
import { ref,watch,reactive } from 'vue'
export default {
  name: 'Demo',
  setup (props, context) {
    let sum = ref(0)
    let msg = ref('你好啊')
    let person = reactive({
      name: '张三',
      age: 20,
      job: {
        j1:{
          salary: 20
        }
      }
    })
    // 情况一: 监视ref所定义的一个响应式数据变化
    // watch(sum, (newVal, oldVal) => {
    //   console.log('sum发生了变化', newVal, oldVal)
    // }, {immediate: true}})

    // 情况二: 监视ref所定义的多个个响应式数据变化
    // watch([sum, msg], ([newSum, newMsg], [oldSum, oldMsg]) => {
    //   console.log('sum和msg发生了变化', newSum, newMsg, oldSum, oldMsg)
    // }, {immediate: true})

    // 情况三：监视reactive所定义的一个响应式数据变化, 
    // 1.注意：此处无法正确的获取到oldPerson
    // 2.主语：强制开启了深度监视(deep配置无效)
    // watch(person, (newPerson, oldPerson) => {
    //   console.log('person发生了变化', newPerson, oldPerson)
    // }, {deep: true})

    // 情况四：监视reactive所定义的一个响应式数据中的某个属性变化
    // watch(()=>person.name, (newName, oldName) => {
    //   console.log('person.name发生了变化', newName, oldName)
    // })

    // 情况五：监视reactive所定义的一个响应式数据中的某些属性变化
    // watch([()=>{person.name}, ()=>{person.age}], ([newName, newAge], [oldName, oldAge]) => {
    //   console.log('person.name和person.age发生了变化', newName, newAge, oldName, oldAge)
    // })

    // 特殊情况
    watch(()=>person.job, (newJob, oldJob) => {
      console.log('person.job发生了变化', newJob, oldJob)
    }, {deep:true}) // 此处由于监视的是reactive定义的对象中的某个属性，所以deep配置有效，所以需要开启immediate
    return {
      sum, 
      msg,
      person
    }
  }
}
</script>
