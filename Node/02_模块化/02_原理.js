/*
    所有的CommonJS 的模块都会被包装到一个函数中
    (function(exports,require,module,__filename,__dirname) {
      // 模块代码
    });
*/
(function(require,exports,module,__filename,__dirname) {
  let a = 10
  let b = 20
})
// console.log(arguments)
console.log(__filename) //__filename 表示当前模块的绝对路径
console.log(__dirname) // 当前模块所在路径
 