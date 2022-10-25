/*
    早期的网页中，是没用一个实质的模块规范的
        我们实现模块化的方式，就是最原始的通过script标签来引入js
        问题：
          1.无法选择要引入模块的那些内容
          2.在复杂的模块化场景下非常容易出错
          ...

        于是，我们就继续在js中引入一个模块化的解决方案

    在node中，默认支持的模块化规范叫做CommonJS。
        在CommonJS中，一个JS文件就是一个模块

    CommmonJS规范
        - 引入规范
            - 使用require()函数来引入模块
            - 引入自定义模块时
                - 模块名要以./ 或者 ../开头
                - 扩展名可以省略不写
                    - 在CommonJS中,如果省略的js文件的扩展名
                        node 会自动为文件补全扩展名
                            ./m1.js 如果没有js 他会寻找 ./m1.json   js--->json--->node

        - 引入核心模块时
            - 直接写核心模块的名字即可
            - 也可以在核心模块前添加 node:  (指定为核心模块)
*/
const m1 = require('./m1')
const path = require("node:path")
const m2 = require("./m2.cjs")
const hello = require('./hello')
// console.log(m1)
// console.log(path)
// console.log(m2)
console.log(hello)
// m1.c()
// m1.b()