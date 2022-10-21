//  该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
import About from '../components/About'
import Home from '../components/Home'
import News from '../components/News'
import Message from '../components/Message'

//  创建并暴露一个路由器
export default new VueRouter({
  routes: [
    {
      path: '/about',
      component: About
    },
    {
      path: '/Home',
      component: Home,
      children: [
        {
          path: 'news',
          component: News
        },
        {
          path: 'message',
          component: Message
        }
      ]
    }
  ]
})
