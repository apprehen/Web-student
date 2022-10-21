/*
    进程和线程
        - 进程 (厂房)
            - 程序的运行的环境
        - 线程 (工人)
            - 线程是实际进行运算的东西

    同步
        - 通常情况代码都是自上向下一行一行执行的
        - 前面的代码不执行后面的代码也不会执行
        - 同步的代码执行会出现阻塞的情况
        - 一行代码执行慢会影响到整个程序的执行

    解决同步问题:
      - java python
          - 通过多线程来解决,麻烦捏
      - node.js
          - 通过异步方式来解决

    异步
        - 一段代码的执行不会影响到其他的程序
        - 异步的问题
            异步的代码无法通过return来设置返回值
        - 特点:
            1.不会阻塞其他代码的执行
            2.需要通过回调函数来返回结果
        - 基于回调函数的异步带来的问题
            1.代码的可读性差
            2.可调试性差
        - 解决问题:
            - 需要一个东西，可以代替回调函数来给我们返回结果
            - Promise 
                - Promise 是一个可以用来储存数据的对象
                  promise 储存数据的方式比较特殊
                  这种特殊的方式使得Promise可以用来储存异步调用的数据
*/ 
function sum(a,b,callback){
  setTimeout(()=>{
    callback(a+b)
  },500)
}
console.log("meigumi")

sum(123,456,result=>{
  sum(result,7,result=>{
    sum(result,8,result=>{
      sum(result,9,result=>{
        sum(result,10,result=>{
          sum(result,11,result=>{
            sum(result,12,result=>{
              sum(result,13,result=>{
                sum(result,14,result=>{
                  console.log(result)
                })
              })
            })
          })
        })
      })
    })
  })
})

console.log("explosion!!!")