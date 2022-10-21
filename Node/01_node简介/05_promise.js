/*
  静态方法
    Promise.resolve() 创建一个立即完成的Promise
    Promise.reject() 创建一个立即拒绝的Promise
    Promise.all([...]) 同时返回多个Promise的执行结果
        其中有一个报错就会返回错误
    Promise.allsettle([...]) 同时返回多个Promise的执行结果(无论是否成功)
        {status: 'fulfilled', value: 579}
        {status: 'fulfilled', value: 11}
        {status: 'rejected', reason: '哈哈哈哈'}
        {status: 'fulfilled', value: 77}
    Promise.race([...]) 返回执行最快的Promise 不考虑对错
    Promise.any([...]) 返回执行最快的完成的Promise· ~                       
*/
// Promise.resolve(10).then( r =>console.log(r) )
// new Promise((resolve,reject)=>{
//   resolve(10)
// }).then(result=>console.log(10))
// Promise.reject('出错辣').catch(r => console.log('嗨嗨嗨'))
function sum (a,b) {
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve(a+b)
    },1000)
  })
}
// Promise.all([
//   sum(123,456),
//   sum(5,6),
//   Promise.reject('哈哈哈哈'),  
//   sum(33,44)
// ]).then(r=>{
//   console.log(r)
// })
Promise.allSettled([
  sum(123,456),
  sum(5,6),
  Promise.reject('哈哈哈哈'),  
  sum(33,44)
]).then(r=>{
  console.log(r)
})
