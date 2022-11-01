const express = require("express")
const path = require("path")
// 创建服务器的实例
const app = express()

// use() 中间件
// 设置static中间件后，浏览器访问时，会自动去public目录寻找是否有匹配的静态资源
app.use(express.static(path.resolve(__dirname,"./public")))

// 配置路由
/*
  nodemon 默认启动index.js
*/
/*
  希望用户返回根目录时，可以给用户返回一个网页
*/
app.get("/Hello",(req,res)=>{
  // res.send(`
  // <!DOCTYPE html>
  // <html lang="en">
  // <head>
  //   <meta charset="UTF-8">
  //   <meta http-equiv="X-UA-Compatible" content="IE=edge">
  //   <meta name="viewport" content="width=device-width, initial-scale=1.0">
  //   <title>Document</title>
  // </head>
  // <body>
  //   <h1>This is buhao</h1>
  // </body>
  // </html>
  // `)
  /*
    服务器中的代码，对于外部来说都是不可见的
      所有写html页面时，浏览器不能直接访问到
      如果希望浏览器可以访问，则需要将页面所在的目录设置静态资源
  */
})

// 处理表单
app.get("/login",(req,res)=>{
  console.log("用户发起了请求")
  // console.log(req.query)
  if (req.query.userName === "admin" && req.query.passWord === "admin123"){
    res.send(`<h1>登陆成功</h1>`)
  } else {
    res.send(`<h1>用户名或者密码错误</h1>`)
  }
})

// 启动服务器
app.listen(3000,()=>{
  console.log("服务器已启动!!")
})
