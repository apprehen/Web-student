// Promise 就是一个用来存储数据的对象
// 但是由于Promie 存取方式的特殊，所以可以直接将异步调用的结果存储到Promise中

/*
  对 promise 进行链式调用时
    -后边的方法(then 和 catch)读取的上一步的执行结果
      -如果上一步的执行结果不是当前想要的结果，则跳过当前的方法

  当Promise出现异常时，而整个调用中没有出现catch，则异常会向外抛出
*/
const promise = new Promise((resolve,reject)=>{
  // resolve("数据存储成功")
  reject('出错辣')
})

promise
  .then(r => "嗨嗨嗨")
  .catch(r => {
    // throw new Error('报个错玩玩捏')
    console.log('异常处理',r)
    return '禾'
  })
  .then(r => console.log('第二个then',r))
  .catch(r => console.log('又错辣',r))
/*
    Promise 中的
      -then (return new Promise() )
      -catch
        这三个方法都会返回一个新的Promise
          Promise中会储存回调函数中的返回值
      -finally
          -finally的返回值，不会储存到新的 Promise 中
*/
// const p2 = promise.then(result=>{
//   console.log("回调函数",result)
//   return "EXPLOSION!!"
// })

// const p3 = promise.then(result=>{
//   console.log("回调函数",result)
//   return "EXPLOSION!!"
// }).then(result=>{
//   console.log(result)
//   return "meigumi"
// })

// const p4 = p3.then(result=>{
//   console.log(result)
// })
// promies 链式调用
// promise
//     .then(result=>{
//       console.log("回调函数",result)
//       return "EXPLOSION!!"  
//     })
//     .then(result=>{
//       console.log(result)
//         return "meigumi"
//     })
//     .then(result=>{
//       console.log(result)
//     })


// promise.then((result)=>{
//   console.log(result)
// },(reason)=>{
//   console.log('出错辣',reason)
// })
function sum (a,b) {
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve(a+b)
    },1000)
  })
}
// promise的回调
// sum(123,456).then((result)=>{
//   sum(result,7).then((result)=>{
//      sun(result,8).then((result)=>{ })
//})
// })
// sum链式回调
// sum(123,456)
//   .then(result => result + 7)
//   .then(result => result + 8)
//   .then(result => result + 9)
//   .then(result => console.log(result))