// 开启一个定时器 (异步) (消息队列)
// 定时器的作用是间隔一段时间后，将函数放入到任务队列中
setTimeout(()=>{
  console.log(111)
})

/*
  Promise的执行原理
    -Promise在执行，then就相当于给Promise了回调函数
        当Promise的状态从pending 变为 fulfilled时，
            then的回调函数会被放入到任务队列中
*/
/*
  queueMicrotask () 向微任务中添加一个微任务中 (先进先出)
*/

Promise.resolve(1).then((result)=>{
  // console.log(222) //第一种
  // setTimeout(()=>{
  //   console.log('我是pro中的settime')
  // },0)
  Promise.resolve(1).then(()=>{
    console.log('微中微')
  })
})

queueMicrotask(()=>{
  console.log('que中',111)
})
console.log(333)

/*
    JS是单线程，它的运行时基于事件循环机制
        -调用栈
          -栈
            栈是一种数据结构，后进先出
          -调用栈中，放的是要执行的代码
        -任务队列
          -队列
              -队列是一种数据结构，先进先出
          -任务队列的是将要执行的代码
          -当调用栈中的代码执行完毕后，队列中的代码才会按照顺序依次进入栈中执行
          -在JS中任务队列有两种
              -宏任务队列 (大部分代码都去宏任务队列中去排队)
              -微任务队列 (Promise的回调函数 (then,catch,finally))
    
    - 整个流程
        1. 执行调用栈中的代码
        2. 执行微任务队列中的所有任务
        3. 执行宏任务队列中的所有任务
*/