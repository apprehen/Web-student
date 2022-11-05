const express = require("express")
const path = require("node:path")
const app = express()
const fs = require("node:fs/promises")

let STUDENT_ARR = require("./data/students.json")

// 配置静态资源
app.use(express.static(path.resolve(__dirname,'public')))
// 配置解析中间体
app.use(express.urlencoded())
// 配置模板引擎
app.set("view engine","ejs")
// 配置模板引擎路径
app.set("views",path.resolve(__dirname,"views"))

// 渲染ejs模板
app.get("/students",(req,res)=>{
  res.render("students",{stus: STUDENT_ARR })
})

// 处理添加路由
app.post("/add_student",(req,res)=>{
  const id = STUDENT_ARR.at(-1) ? STUDENT_ARR.at(-1).id + 1: 1
  // 1.获取用户填写的信息
  const register = {
    id,
    name:req.body.name,
    age: +req.body.age,
    gender:req.body.gender,
    address:req.body.address
  }
  // 2. 验证用户信息（略 。。。

  // 3. 将用户信息添加到数组中
  STUDENT_ARR.push(register)

  // 4. 返回响应
  // res.send("添加成功！")
  // 直接在添加路由中渲染ejs，会面临表单重复提交的问题
  // res.render("students", { stus: STUDENT_ARR })

  // 解决办法
  // res.redirect() 用来发起请求重定向
  // 重定向的作用是告诉浏览器你向另外一个地址再发起一次请求
  // 永久储存到json文件中
  fs.writeFile(
    path.resolve(__dirname,"./data/students.json"),
    JSON.stringify(STUDENT_ARR)
  ).then(()=>{
    res.redirect("/students")
  }).catch(()=>{
    console.log("出错辣")
  })
  // res.redirect("/students")
})

/*
  删除功能:
    - 点击删除链接后,删除当前数据
    - 点击 xx 删除 ----> id 为 n 的学生
    - 流程:
        1.点击小姜禾的删除链接
        2.向路由发送请求 (写一个路由)
        3.路由怎么写
            - 获取学生的id
            - 删除id为n的学生
            - 将数组重新写入文件中
            - 重定向到学生列表页面
  修改功能:
    - 点击修改后,显示一个表单,表单中有要修改的学生信息
        用户对学生信息进行修改,修改以后点击按钮提交表单
    - 流程:
        1.点击小姜禾的修改连接
        2.跳转到一个路由
            - 这个路由会返回一个页面,页面中有一个表单,表单中显示孙悟空的各种信息
        3.用户填写表单，点击按钮提交到一个新的路由
            - 获取学生信息，并对信息进行修改
*/
// 添加删除路由
app.get("/delete",(req,res)=>{
  const id = + req.query.id
  STUDENT_ARR = STUDENT_ARR.filter(stu=>stu.id !== id)
  fs.writeFile(
    path.resolve(__dirname,"./data/students.json"),
    JSON.stringify(STUDENT_ARR)
  ).then(()=>{
    res.redirect("/students")
  }).catch(()=>{
    console.log("出错辣")
  })
})

// 添加修改路由,渲染修改ejs模板
app.get("/update",(req,res)=>{
  const id = +req.query.id
  // 获取要修改的学生信息
  const student = STUDENT_ARR.find((item)=> item.id === id)
  res.render("update",{ student })
})

// 提交修改的路由
app.post("/updateStu",(req,res)=>{
  // const id = req.query.id
  const id = +req.body.id
  const updateStu = {
    id,
    name:req.body.name,
    age: +req.body.age,
    gender:req.body.gender,
    address:req.body.address
  }
  // 修改学生信息
  // 根据id获取学生对象
  const student = STUDENT_ARR.find((item)=> item.id == id)
  student.name = updateStu.name
  student.age = updateStu.age
  student.gender = updateStu.gender
  student.address = updateStu.address
  fs.writeFile(
    path.resolve(__dirname,"./data/students.json"),
    JSON.stringify(STUDENT_ARR)
  ).then(()=>{
    res.redirect("/students")
  }).catch(()=>{
    console.log("出错辣")
  })
})

// 配置错误路由
app.use((req,res)=>{
  // 匹配不到路径时候会反应
  res.status(404)
  res.send("<h1>你的网站被外星人劫持辣</h1>")
})

app.listen(3000,()=>{
  console.log("服务器启动了捏")
})