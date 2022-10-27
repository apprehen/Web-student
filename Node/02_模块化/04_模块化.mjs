/*
  默认情况下，node中的模块化标准是CommonJS
    想要使用ES的模块，可以采用以下两种方案
      1.使用mjs作为扩展名
      2.修改package.json 将模块化规范设置为ES模块
          当我们设置"type" : "module" 当前项目下的所有js文件都默认为es module
*/

// 导入m4模块，es模块不能省略扩展名 (官方标准)
// 通过as来指定别名
// import {a as hello,b,c,d} from './m4.mjs'
// import * as m4 from './m4.mjs'  // 尽量避免
// console.log(a,b,c,d)
// console.log(hello)
// console.log(m4.a)

// 导入模块的默认导出
// 默认导出的内容，可以随意命名
import sum, {a,b,c} from './m4.mjs'

// 通过 ES 模块化，导入的内容都是常量
// es 模块都是运行在严格模式下的
// ES 模块化在浏览器同样支持，但是一般不会去使用
//        -- 通常结合着打包工具一起使用
const result = sum(123,456)
console.log(result)