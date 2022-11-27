// 路径模块
const path = require('path')
// 存入文件模块
const fs = require('fs/promises')

// 从文件导入数据
let USER_ARR = require('./data/user.json')

// 写入文件函数
function ToFile () {
  fs.writeFile(
    path.resolve(__dirname,'./data/user.json'),
    JSON.stringify(USER_ARR)
    ).then(()=>{
      console.log('存储成功')
    })
    .catch(()=>{
      console.log('出错辣')
    })
}

const btn = document.querySelector('.btn')
btn.onclick = () => {
  const username = document.querySelector("#username").value.trim()
  const passWord = document.querySelector('#password').value.trim()
  // 做一下用户校验
  const register = {
    cookie: username,
    username: username,
    password: passWord
  }
  USER_ARR.push(register)
  ToFile()
  window.location.href = './result.html'
}
