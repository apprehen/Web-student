/*
    核心模块, 是node自带的模块，可以在node中直接使用
    window 是浏览器的宿主对象，node中没有
    global 是node中的全局对象，作用类似于window
    ES 标准下 全局对象的标准名应该是 globalThis
*/
// console.log(globalThis === global)

/*
  核心模块
    process
      - 表示当前node的进程
      - 通过该对象可以获取进程的信息，或者对进程做各种操作
      - 如何使用
          1.process 是一个全局变量可以直接使用
          2.有哪些属性和方法
            process.exit()
                -结束进程，终止node
            process.nextTick(callback[,...args])
                - 将函数插入到 tick 队列中
                - tick 队列中的代码，会在下一次事件循环之前执行
                    会在微任务队列和宏任务队列之前执行

      - 调用栈
        tick 队列
        微任务 队列
        宏任务 队列

*/
// console.log(1111)
// process.exit()
// console.log(2222)
// console.log(3333)

setTimeout(() => {
  console.log(1)
})
queueMicrotask(()=>{
  console.log(2)
})
process.nextTick(()=>{
  console.log(3)
})
console.log(4)
