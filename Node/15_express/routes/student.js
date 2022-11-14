const express = require("express")
const router = express.Router()
let STUDENT_ARR = require("../data/students.json")
const fs = require("fs/promises")
const path = require("path")

router.use((req, res, next) => {
    if (req.session.loginUser) {
        next()
    } else {
        res.redirect("/")
    }
})

// 学生列表的路由
router.get("/list", (req, res) => {
    // session的默认有效期是一次会话
    // if (req.session.loginUser) {
    //     res.render("students", { stus: STUDENT_ARR })
    // } else {
    //     res.redirect("/")
    // }

    res.render("students", { stus: STUDENT_ARR, username:req.session.loginUser })
})

// 添加学生的路由
router.post("/add", (req, res, next) => {
    const id = STUDENT_ARR.at(-1) ? STUDENT_ARR.at(-1).id + 1 : 1

    const newUser = {
        id,
        name: req.body.name,
        age: +req.body.age,
        gender: req.body.gender,
        address: req.body.address
    }

    STUDENT_ARR.push(newUser)

    //调用next交由后续路由继续处理
    next()
})

// 删除学生的路由
router.get("/delete", (req, res, next) => {
    const id = +req.query.id

    STUDENT_ARR = STUDENT_ARR.filter((stu) => stu.id !== id)

    next()
})

router.post("/update-student", (req, res, next) => {
    const { id, name, age, gender, address } = req.body
    const student = STUDENT_ARR.find((item) => item.id == id)

    student.name = name
    student.age = +age
    student.gender = gender
    student.address = address
    next()
})

router.get("/to-update", (req, res) => {
    const id = +req.query.id
    const student = STUDENT_ARR.find((item) => item.id === id)

    res.render("update", { student })
})

// 处理存储文件的中间件
router.use((req, res) => {
    fs.writeFile(
        path.resolve(__dirname, "../data/students.json"),
        JSON.stringify(STUDENT_ARR)
    )
        .then(() => {
            res.redirect("/students/list")
        })
        .catch(() => {
            res.send("操作失败！")
        })
})

module.exports = router
