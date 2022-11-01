const express = require("express")
const app = express()
const path = require("node:path")

// 创建一个数组来储存用户信息
const USERS = [
  {
    userName:'admin',
    passWord:'admin123',
    nickname:'SUPER'
  },
  {
    userName: 'jianghe',
    passWord:'Apprehen',
    nickname: '小姜禾'
  }
]

app.use(express.static(path.resolve(__dirname,'public')))
app.use(express.urlencoded())

// 处理注册的路由
app.post('/register',(req,res)=>{
  // console.log(req.body)
  // 结构注意是对象还是数组
  const {nickname,userName,passWord,repass} = req.body
  // 验证是否有效 跳
  // 验证用户名是否存在
  const flag = USERS.find((item)=>{
    return item.nickname === nickname || item.userName === userName
  })
  if (!flag) {
    USERS.push({
      userName,
      passWord,
      nickname
    })
    res.send(`<h1>恭喜你${nickname}，注册成功！！</h1>`)
  } else {
    res.send(`<h1>用户名或者昵称错误辣</h1>`)
  }
})

// 处理登陆的路由
app.post('/login',(req,res)=>{
  const {userName,passWord,nickname} = req.body
  const loginuser = USERS.find((item)=>{
    return item.userName === userName && item.passWord === passWord
  })
  if (loginuser) {
    res.send(`<h1>登陆成功!!${loginuser.nickname}</h1>`)
  } else {
    res.send(`<h1>用户名或密码错误</h1>`)
  }
})


app.listen(3000,()=>{
  console.log("服务器启动了捏")
})