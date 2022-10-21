//  该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
import About from '../components/About'
import Home from '../components/Home'
import News from '../components/News'
import Message from '../components/Message'
import Detail from '../components/Detail'

//  创建并暴露一个路由器
export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/about',
      component: About
    },
    {
      path: '/home',
      component: Home,
      children: [
        {
          path: 'news',
          component: News
        },
        {
          path: 'message',
          component: Message,
          children: [
            {
              name: 'xiangqing',
              path: 'detail/:id/:title',
              component: Detail,
              //  props的第一种写法，值为对象,该对象中的所有key-value都会以props的形式传给Detail组件
              // props: { a: 1, b: 'hello' }

              //  props的第二种方法，值为布尔值，若布尔值为真，就会把该路由组件收到的所有params参数，以props的形式传给Detail组件
              // props: true

              //  props的第三种写法，值为函数
              props ($route) {
                return {
                  id: $route.params.id,
                  title: $route.params.title
                }
              }
            }
          ]
        }
      ]
    }
  ]
})
