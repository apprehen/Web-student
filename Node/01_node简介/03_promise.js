/*
  异步调用必须要通过回调函数来返回数据
      当我们进行一些复杂的调用时，会出现'回调地狱'

  问题:
      异步必须通过回调函数来返回结果，回调函数一多就很痛苦

  Promise
      - Promise可以帮助我们解决异步中的回调函数的问题
      - Promise就是一个用来储存数据的容器
          它拥有着一套特殊的存取数据的方式
          这个方式使得它里边可以存储异步调用的结果
*/
// 创建Promise
// 创建Promise时，构造函数中需要一个函数作为参数
// Promise构造函数的回调函数，它会在创建Promise时调用,调用时会有两个参数传递进去
// const promise = new Promise((resolve,reject)=>{
//   // resolve 和 reject 是两个函数,通过这两个函数可以向Promise中储存数据
//   // resolve 在执行正常时存储数据，reject 在执行错误时存储数据
//   // resolve('哈哈')
//   // 通过函数来向Promise中添加数据,好处就是可以用来添加异步调用的数据
//   throw new Error("哈哈哈哈白给辣")
//   setTimeout(()=>{
//     // resolve('resolve中捏捏捏')
//     reject('reject中捏捏捏')
//   },2000)
// })
const promise = new Promise((resolve,reject)=>{
  resolve("Explosion")
  setTimeout(()=>{
    resolve('我是setTimeout中的存储数据')
  },2000)
})
console.log(promise)
console.log(11)
/*
    从Promise中读取数据
        - 可以通过Promise的实例方法then 来读取Promise中储存的数据
        - then 需要传入两个回调函数作为参数，回调函数用来获取Promise中的数据
            通过 resolve 储存的数据,会调用第一个函数返回
              可以在第一个函数中编写处理数据的代码 (try)
            通过 reject 储存的数据或者出现异常的时，会调用第二个函数返回
              可以在第二个函数中编写处理异常的代码 (expect)
*/
promise.then((result)=>{
  console.log('1',result)
},(reason)=>{
  console.log('2',reason)
})

/*
    Promise 中维护了两个隐藏的属性
        PromiseResult
          -用来存储数据

        PromiseState
          -记录Promise的状态 (三种状态)
              pending  (进行中)
              fulfilled (完成)  通过resolve存储数据时
              rejected (拒绝，出错辣) 出错了或通过reject存储数据时
          -State只能修改一次，修改以后永远不会在变

        流程：
            当Promise创建时，PromiseState初始值为pending
                当通过resolve储存数据时 PromiseState 变成fulfilled (完成)
                    PromiseResult 变成储存的数据
                当通过reject储存数据或者出错时 PromiseState 变成rejected (拒绝,出错辣)
                    PromiseResult 变成储存的数据 或 异常对象

            当我们通过then读取数据时，相当于为 Promise 设置了回调函数
                如果PromiseState变为fulfilled 则调用then的第一个回调函数
                如果PromiseState变为rejected 则调用then的第二个回调函数
*/
// const promise2 = new Promise((resolve,reject)=>{
//   // resolve("hhh")
//   reject('xixi')
// })
/*
    catch() 用法和then类似，但是只需要一个回调函数作为参数
        catch()中的回调函数只会在Promise被拒绝时才会被调用
        catch() 相当于 then(null,reason=>{ })
        catch() 就是一个专门处理 Promise 异常的方法

    finally() 
        - 无论是正常储存数据还是出现异常了，finally总会执行
        - 但是finally的回调函数中不会接受到数据
        - finally() 通常来编写一些无论成功与否都会执行代码
*/
// promise2.catch(reason=>{
//   console.log(222)
// })