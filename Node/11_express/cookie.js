const express = require("express")
const app = express()
const path = require("node:path")
const fs = require("fs/promises")

const cookieParser = require("cookie-parser")
app.set("view engine","ejs")
app.set("views",path.resolve(__dirname,"views"))
app.use(express.static(path.resolve(__dirname,"public")))
app.use(express.urlencoded())
app.use(cookieParser())

app.get('/set',(req,res)=>{
  /*
    cookie 是有有效期的
        - 默认情况下cookie的有效期是一次会话(session)
            会话就是一次从打开到关闭浏览器的过程
        - maxAge 用来设置cookie有效时间，单位是ms
  */ 
  res.cookie("name","sunwukong",{
    maxAge: 1000 * 60 * 60 * 24 * 30
  })
  res.send("设置cookie")
})

app.get("/get",(req,res)=>{
  const name = req.cookies.name
  console.lolg(name)
  res.send("读取cookie")
})

app.get("/delete-cookie",(req,res)=>{
  // cookie 一旦发送给浏览器我们就不能在修改了
  // 但是我们可以通过发送新的同名cookie来替换旧cookie，而从达到修改的目的
  res.cookie("name","",{
    maxAge: 0
  })
  
  res.send("删除Cookie")
})


app.use((req,res)=>{
  res.status(404).send("<h1>您访问你的网站已被外星人劫持</h1>")
})

app.listen(3000,()=>{
  console.log("服务器运行了捏")
})