<template>
  <h1>一个人的信息</h1>
  姓: <input type="text" v-model="person.fitstName" />
  <br>
  名: <input type="text" v-model="person.lastName" />
  <br>
  <span>全名 {{ person.fullName }}</span>
</template>

<script>
import { reactive,computed } from 'vue'
export default {
  name: 'Demo',
  setup (props, context) {
    let person = reactive({
      fitstName: '张',
      lastName: '三',
    })
    // 计算属性--简写 (没有考虑到计算属性被修改的情况)
    // person.fullName = computed(() => {
    //   return person.fitstName + person.lastName
    // })
    // 计算属性--完整写法 (考虑读和写)
    person.fullName = computed({
      get () {
        return person.fitstName + '-' + person.lastName
      },
      set (value) {
        let names = value.split('-')
        person.fitstName = names[0]
        person.lastName = names[1]
      }
    })
    return {
      person,
    }
  }
}
</script>
