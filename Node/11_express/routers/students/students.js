const express = require("express")
const router = express.Router()
let STUDENT_ARR = require("../../data/students.json")
const fs = require("fs/promises")
const path = require("node:path")
const cookieParser = require("cookie-parser")

// 学生列表路由
router.get("/list",(req,res)=>{
  res.render("students",{stus:STUDENT_ARR})
})

// 添加学生的路由
router.post("/add",(req,res,next)=>{
  const id = STUDENT_ARR.at(-1) ? STUDENT_ARR.at(-1).id + 1: 1
  const register = {
    id,
    name:req.body.name,
    age: +req.body.age,
    gender:req.body.gender,
    address:req.body.address
  }
  STUDENT_ARR.push(register)
  // 放行交给下面路由来处理
  next()
})

// 删除学生的路由
router.get("/delete",(req,res,next)=>{
  const id = + req.query.id
  STUDENT_ARR = STUDENT_ARR.filter(stu=>stu.id !== id)
  next()
})

// 修改学生路由
router.get("/update",(req,res)=>{
  const id = +req.query.id
  // 获取要修改的学生信息
  const student = STUDENT_ARR.find((item)=> item.id === id)
  res.render("update",{ student })
})

router.post("/updateStu",(req,res,next)=>{
  // const id = req.query.id
  const id = +req.body.id
  const updateStu = {
    id,
    name:req.body.name,
    age: +req.body.age,
    gender:req.body.gender,
    address:req.body.address
  }
  const student = STUDENT_ARR.find((item)=> item.id == id)
  student.name = updateStu.name
  student.age = updateStu.age
  student.gender = updateStu.gender
  student.address = updateStu.address
  next()
})

// next() 放行处理 一同处理
router.use((req,res)=>{
  fs.writeFile(
    path.resolve(__dirname,"../../data/students.json"),
    JSON.stringify(STUDENT_ARR)
  ).then(()=>{
    res.redirect("/students/list")
  }).catch(()=>{
    res.send("出错辣")
  })
})

module.exports = router