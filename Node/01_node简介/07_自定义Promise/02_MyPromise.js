
const PROMISE_STATE ={
  PENDING: 0,
  FULFILLED: 1,
  REJECT: 2
}

class MyPromise {
  // 创建一个变量用来储存Promise的结果
  #result
  // 创建一个变量来接受回调函数
  #callback

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
    this.#state = PROMISE_STATE.FULFILLED //数据填充成功
    
    // 当resolve执行时，说明数据已经进来了，需要调用then的回调函数
    this.#callback && this.#callback(this.#result)
  }
  // 私有的 reject() 用来储存拒绝的数据
  #reject () {}

  // 添加一个用来读取数据的then方法
  then(onFulfilled,onRejected){
    if (this.#state === PROMISE_STATE.PENDING) {
        // 进入判断说明数据还没有进入Promise，将回调函数设置成callback的值 (赋值给对象的属性)
        this.#callback = onFulfilled
    } else if (this.#state === PROMISE_STATE.FULFILLED) {
      /*
        目前来讲，then只能读取已经存储进 Promise 的数据
          而不能读取异步储存的数据
      */
      onFulfilled(this.#result)
    }
  }
}

const mp = new MyPromise((resolve,reject)=>{
  setTimeout(()=>{
    resolve("孙悟空")
  },1000)
})
mp.then((result)=>{
  console.log('读取数据',result)
},()=>{})
