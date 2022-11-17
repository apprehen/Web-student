const express = require("express")
const jwt = require("jsonwebtoken")
const app = express()

let STUDENT_ARR = [
  {
    id:'1',
    name:'孙悟空',
    age:18,
    add:'花果山',
    gender:'♂'
  },
  {
    id:'2',
    name:'猪八戒',
    age:28,
    add:'高老庄',
    gender:'♂'
  },
  {
    id:'3',
    name:'沙和尚',
    age:38,
    add:'流沙河',
    gender:'♂'
  },
]

//配置解析请求体
app.use(express.urlencoded({extended:true}))
//解析JSON的中间件
app.use(express.json())

app.use((req,res,next)=>{
  // 设置响应头
  res.setHeader("Access-Control-Allow-Origin","*")
  res.setHeader("Access-Control-Allow-Methods","GET,POST")
  res.setHeader("Access-Control-Allow-Headers","Content-type")
  // Access-Control-Allow-Origin 设置指定值时只能设置一个
  // res.setHeader("Access-Control-Allow-Origin","http://127.0.0.1:5500")
  // Access-Control-Allow-Methods 允许的请求的方式
  // Access-Control-Allow-Headers 允许传递的请求头
  next()
})

app.post("/login",(req,res)=>{
  console.log("有人在登陆捏")
  const { username, password } = req.body
  if(username === 'admin' && password == '123123') {
    // 登录成功生成token
    const token = jwt.sign({
      username:username,
      password:password
    }, "explosion",{
      expiresIn: "1day"
    })
    res.send({
      status: 'ok',
      data: {token,nickname: 'megumi'}
    })
  } else {
    res.status(403).send({
      status: 'error',
      data: '用户名或密码输出错误'
    })
  }
})

// 统一API
// 定义学生信息的路由
app.get("/students",(req,res)=>{
  // 设置响应头
  // 手动写死只能写一个
  res.setHeader("Access-Control-Allow-Origin","http://127.0.0.1:5500")
  console.log("students收到get请求")
  res.send({
    status: 'ok',
    data:STUDENT_ARR})
})

// 定义添加学生的路由
app.post("/students",(req,res)=>{
  // 获取学生的信息
  // 一般会有校验但这里就不校验辣
  const { name,age,add,gender } = req.body
  // 将学生的信息添加到数组中
  console.log("students受到post请求")
  const stu = {
    id: +STUDENT_ARR.at(-1).id + 1 + '',
    name,
    age:+age,
    add,
    gender
  }
  STUDENT_ARR.push(stu)
  res.send({
    status:'ok',
    data:stu
  })
})

// 查询某个学生的路由
app.get("/students/:id",(req,res)=>{
  const id = req.params.id
  console.log(`服务器请求了id为${id}的学生`)
  const student = STUDENT_ARR.find(item => item.id === id)
  // 将数据返回
  if (student) {
    res.send({
      status: 'ok',
      data: student
    }) 
  } else {
    res.send({
      status: 'error',
    })
  }
})

// 定义学生删除的路由
app.delete("/students/:id",(req,res)=>{
  const id = req.params.id
  console.log(`服务器删除了id为${id}的学生`)
  const DeleteStu = STUDENT_ARR.filter(item=> item.id === id)
  STUDENT_ARR = STUDENT_ARR.filter( item => item.id !== id)
  // console.log(STUDENT_ARR)
  if(DeleteStu){
    res.send({
      status: 'ok',
      data: DeleteStu
    })
  } else {
    res.status(403).send({
      status:'error'
    })
  }
})

// 定义学生修改的路由
app.put("/students/:id",(req,res)=>{
  const id = req.params.id
  console.log(`服务器修改了id为${id}的学生`)
  const {name,age,add,gender} = req.body
  let updateStu = STUDENT_ARR.find( item => item.id === id)
  if (updateStu){
  updateStu.name = name
  updateStu.age = age
  updateStu.add = add
  updateStu.gender = gender
  res.send({
    status:'ok',
    data: updateStu
  })
} else {
  res.status(403).send({
    status: 'error',
  })
}
})

// 定义查询某个学生的路由
app.listen(3000,()=>{
  console.log("服务器已经启动")
})