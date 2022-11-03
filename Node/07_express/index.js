const express = require("express")
const app = express()
const path = require("node:path")

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
// 配置模板引擎,将ejs设为默认的模板引擎
app.set("view engine","ejs")
// 配置模板路径
app.set("views",path.resolve(__dirname,"views"))
// 配置静态资源
app.use(express.static(path.resolve(__dirname,'public')))
// 配置请求体
app.use(express.urlencoded({ extended:true }))
app.use(express.json())

app.get("/hello",(req,res)=>{
  res.send("Hello")
})

app.get("/students",(req,res)=>{
  // 希望用户在访问students路由时，可以给用户返回一个显示有学生信息的页面
  //  - HTML 属于静态页面难以完成任务，我们希望能随着服务器数据的变化而变化

  // 希望里面可以嵌套变量，这个东西在node中叫模板，node中有很多模板，ejs
  // ejs是node中的一款模板引擎
      // 1. 安装ejs
      // 2. 配置express的模板引擎为ejs

      // 注意模板引擎需要被express渲染后才能使用
      // res.render("student") 用来渲染一个模板引擎,并返回给浏览器
      // 可以将一个对象作为render的第二个参数传递，这样在模板中可以访问到对象中的数据
      // <%= %> 在ejs中输出内容时，他会自动对字符串中的特殊符号进行转义 &lt;
      // <%- %> 直接将内容输出
      // <% %> 可以在其中直接编写 JS 代码，JS代码会在服务器中执行
  res.render("students",{name:'孙悟空',age:18})
})
// 在所有路由后面配置错误路由
app.use((req,res)=>{
  res.status(404)
  res.send('<h1>你访问的路径已被外星人劫持辣</h1>')
})

app.listen(3000,()=>{
  console.log("服务器已经启动了捏")
})