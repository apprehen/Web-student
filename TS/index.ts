//1. class基本用法和约束类型 implements

// 虚拟dom简单版
interface Vnode {
  tag:string // div section footer
  text?:string //123
  children?:Vnode[]
}

class Dom {
  createElement (el:string) {
    return document.createElement(el)
  }
}


interface Options {
  el:string | HTMLElement
}

interface Vuecls {
  options:Options
  init():void
}

class Vue implements Vuecls{
  options: Options
  init(): void {
    //通过js去渲染真实的dom
    let data:Vnode = {
      tag: "div",
      children:[
        {
          tag: "section",
          text: "我是子节点1"
        },
        {
          tag: "section",
          text: "我是子节点2"
        }
      ]
    }
  }
  constructor (options:Options) {
    this.options = options
    this.init()
  }
}

new Vue({
  el:"#app"
})