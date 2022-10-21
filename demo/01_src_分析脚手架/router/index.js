import Vue from 'vue'
import Router from 'vue-router'
import School from '@/components/School'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Demo',
      component: School
    }
  ]
})
