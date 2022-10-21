
const PROMISE_STATE ={
  PENDING: 0,
  FULFILLED: 1,
  REJECT: 2
}

class MyPromise {
  // 创建一个变量用来储存Promise的结果
  #result
  //
  #state = PROMISE_STATE.PENDING //pending 0 fulfilled 1 rejected 2
  constructor (executor) {
    // 接受一个 执行器 作为参数
    executor(this.#resolve.bind(this),this.#reject) // 调用回调函数
  }
  // 私有的 resolve() 用来储存成功的数据
  // #resolve (value) {
  //   // console.log("resovle被调用了捏，value的值是：",value)
  //   this.#result = value
  //   // 注意以函数调用的外层的this打印不到
  //   // 解决办法
  //   //    -1.改成箭头函数
  //   //    -2.用 bind(生成一个新的函数绑定好了this) 锁死this
  // }
  #resolve = (value)=>{
    // 禁止值被重复修改
    if (this.#state !==PROMISE_STATE.PENDING) return
    this.#result = value
    this.#state = PROMISE_STATE.FULFILLED
    console.log(this)
  }
  // 私有的 reject() 用来储存拒绝的数据
  #reject () {}

  // 添加一个用来读取数据的then方法
  then(onFulfilled,onRejected){
    if(this.#state === PROMISE_STATE.FULFILLED) {
      onFulfilled(this.#result)
    }
  }
}

const mp = new MyPromise((resolve,reject)=>{
  
})
mp.then((result)=>{
  console.log('读取数据',result)
},()=>{})
