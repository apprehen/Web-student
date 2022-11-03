const express = require("express")
const app = express()
const path = require("node:path")

// 表格数据
const STUDENT_ARR = [
  {
    name:'孙悟空',
    age:18,
    add:'花果山',
    gender:'♂'
  },
  {
    name:'猪八戒',
    age:28,
    add:'高老庄',
    gender:'♂'
  },
  {
    name:'沙和尚',
    age:38,
    add:'流沙河',
    gender:'♂'
  },
]

// 设置模板引擎
app.set("view engine","ejs")
// 设置模板引擎路径
app.set("views",path.resolve(__dirname,"views"))

// 中间件配置--静态资源
app.use(express.static(path.resolve(__dirname,"public")))
// 解析body
app.use(express.urlencoded())

// 处理学生注册的路由
app.post('/register',(req,res)=>{
  const{name,age,add,gender} = req.body
  // console.log(name,age,add,gender)
  // 假定学生姓名不一样
  const loginuser = STUDENT_ARR.find((item)=>{
    return item.name === name
  })
  if (loginuser) {
    res.send("<h1>已经注册过辣笨蛋</h1>")
  } else {
    STUDENT_ARR.push({
      name,
      age,
      add,
      gender
    })
    res.send(`<h1>注册成功,${name}</h1>`)
  }
})
// 返回学生信息路由
app.get("/students",(req,res)=>{
  res.render("students",{STUDENT_ARR})
})

// 配置错误路由
app.use((req,res)=>{
  res.status(404)
  res.send('<h1>你访问的路径已被外星人劫持辣</h1>') 
})

app.listen(3000,()=>{
  console.log("服务器启动了捏")
})