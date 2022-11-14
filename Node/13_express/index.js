const express = require("express")
const path = require("path")
const app = express()
const cookieParser = require("cookie-parser")
const session = require("express-session")

const userRouter = require("./routes/user")
const goodsRouter = require("./routes/goods")

app.set("view engine", "ejs")
app.set("views", path.resolve(__dirname, "views"))

app.use(express.static(path.resolve(__dirname, "public")))
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(session({
    secret:"dazhaxie"
}))

app.use("/students", require("./routes/student"))

app.get("/", (req, res) => {
    res.render("login")
})

app.post("/login", (req, res) => {
    // 获取用户的用户名和密码
    const {username, password} = req.body
    if(username === "admin" && password === "123123"){
        // 登录成功后，将用户信息放入到session中
        req.session.loginUser = username
        res.redirect("/students/list")
    }else{
        res.send("用户名或密码错误")
    }

})
app.use((req, res) => {
    res.status(404).send("<h1>您访问的页面已经被外星人劫持</h1>")
})

app.listen(3000, () => {
    console.log("服务器已经启动！")
})
