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
  */ 
  res.cookie("name","sunwukong")
  res.send("设置cookie")
})


app.use((req,res)=>{
  res.status(404).send("<h1>您访问你的网站已被外星人劫持</h1>")
})

app.listen(3000,()=>{
  console.log("服务器运行了捏")
})