let a = 10
let b = 20
console.log("我是m1模块")

/*
  在定义模块时，模块中的内容默认是不能被外部看到的
      可以通过exports来设置要向外部暴露的内容

  访问exports的方式有两种
      exports
      module.exports
      - 当我们在其他模块中引入当前模块时，require函数返回的就是exports
      - 可以将希望暴露给外部模块的内容设置exports的属性
*/
// console.log(exports)
// console.log(module.exports)
// 可以通过exports 一个一个导出值
// exports.a = "孙悟空"
// // exports.b = "猪八戒"
// // exports.c = "唐僧"
// exports.b = {name:'yueyun'}
// exports.c = ()=>{
//   console.log("嗨嗨嗨")
// }

// 也可以直接通过module.exports 同时导出多个值
module.exports = {
  a:'哈哈',
  b: ()=>{
    console.log('哈哈')
  },
  c: {username:'??'}
}