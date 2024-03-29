// //1. class基本用法和约束类型 implements
// // 虚拟dom简单版
// interface Vnode {
//   tag:string // div section footer
//   text?:string //123
//   children?:Vnode[]
// }
// class Dom {
//   // 创造节点的方法
//   createElement (el:string) {
//     return document.createElement(el)
//   }
//   // 设置节点的文本
//   setText (node:HTMLElement, text:string | null) {
//     node.innerText  = text as string
//   }
//   // 渲染函数
//   render (data:Vnode) {
//     let el = this.createElement(data.tag)
//     if (data.text) {
//       this.setText(el, data.text)
//     }
//     if (data.children && Array.isArray(data.children)) {
//       data.children.forEach((item) => {
//         el.appendChild(this.render(item))
//       })
//     }
//     return el
//   }
// }
// interface Options {
//   el:string | HTMLElement
// }
// interface Vuecls {
//   options:Options
//   init():void
// }
// class Vue extends Dom implements Vuecls{
//   options: Options
//   init(): void {
//     //通过js去渲染真实的dom
//     let data:Vnode = {
//       tag: "div",
//       children:[
//         {
//           tag: "section",
//           text: "我是子节点1"
//         },
//         {
//           tag: "section",
//           text: "我是子节点2"
//         }
//       ]
//     }
//     let app = typeof this.options.el === "string" ? document.querySelector(this.options.el): this.options.el
//     app?.appendChild(this.render(data))
//     // this.render(data)
//   }
//   constructor (options:Options) {
//     super()
//     this.options = options
//     this.init()
//   }
// }
// new Vue({
//   el:"#app"
// })
var Ref = /** @class */ (function () {
    function Ref(value) {
        this._value = value;
    }
    Object.defineProperty(Ref.prototype, "value", {
        get: function () {
            return this._value + 'get';
        },
        set: function (value) {
            this._value = value + 'set';
        },
        enumerable: false,
        configurable: true
    });
    return Ref;
}());
var ref = new Ref('哈哈');
ref.value = '嘿嘿';
