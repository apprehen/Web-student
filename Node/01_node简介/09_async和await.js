/*
  通过 async 可以快速创建异步函数
*/
function fn () {
  return Promise.resolve(10)
}

/*
    通过async可以用来创建一个异步函数
        异步函数的返回值会自动封装成一个Promise函数

    在async声明的异步函数中可以使用await关键字来调用异步函数
*/
function sum(a,b){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve(a+b)
    },2000)
  })
}
async function fn2 () {
  return 10
}
// let result = fn2()
// console.log(result.then(resolve=>{
//   console.log(resolve)
// }))
async function fn3 () {
  // sum(123,456)
  // .then(r => sum(r,8))
  // .then(r=> sum(r,9))
  // .then( r => console.log(r))
  /*
    当我们通过await去调用异步函数时，他会暂停代码的运行
    直到异步代码执行有结果，才会将结果返回
    注意 await 只能用于 async 声明的异步函数中，或es模块的顶级作用域中
    await 阻塞的只是异步函数内部的代码，不会影响外部代码
    通过 await 调用异步代码，需要通过 try-catch 来处理异常
  */
  try{
    let result = await sum(123,456)
    result = await sum(result,8)
    result = await sum(result,9)
    console.log(result)
  }
  catch(e){
    console.log("出错辣~~")
  }
}
// fn3()
// console.log(111)
/*
  如果async声明的函数中没用写 await 那么它里边就会依次
*/
// async function fn4 () {
//   console.log(1)
//   console.log(2)
//   console.log(3)
// }
// fn4()
// console.log(4)
// function fn5 () {
//   return new Promise((resolve,reject)=>{
//     console.log(1)
//     console.log(2)
//     console.log(3)
//     resolve()
//   })
// }
// fn5() //fn4 === fn5

async function fn4 () {
  console.log(1)
  /*
    当我们使用await调用函数后，当前函数后边的所有代码
        会在当前函数执行完毕后，被放入到微任务队伍中
  */
  await console.log(2)
  console.log(3)
}
fn4()
console.log(4)
// function fn5 () {
//     return new Promise((resolve,reject)=>{
//     console.log(1)
//     // 加 await
//     console.log(2)
//     // console.log(3)
//     resolve()
//   }).then(r=>{
//     console.log(3)
//   })
// }

;(async () => {
  await console.log("hhh")
})()