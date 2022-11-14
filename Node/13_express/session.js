const express = require("express")
const path = require("path")
const app = express()
// 引入session
const session = require("express-session")

const userRouter = require("./routes/user")
const goodsRouter = require("./routes/goods")

app.set("view engine", "ejs")
app.set("views", path.resolve(__dirname, "views"))

app.use(express.static(path.resolve(__dirname, "public")))
app.use(express.urlencoded({ extended: true }))

// 设置session中间件
app.use(
    session({
        secret: "megumi"
    })
)

app.get("/set", (req, res) => {
    /*
        cookie的不足
            - cookie是由服务器创建，浏览器保存
                每次浏览器访问服务器时都需要将cookie发回
                这就导致我们不能在cookie存放较多的数据
                并且cookie是直接存储在客户端，容易被篡改盗用
            - 注意：
                我们在使用cookie一定不会在cookie存储敏感数据

            - 所以为了Cookie的不足，我们希望可以这样
                将用户的数据统一存储在服务器中，
                    每一个用户的数据都有一个对应的id
                    我们只需通过cookie将id发送给浏览器
                    浏览器只需每次访问时将id发回，即可读取到服务器中存储的数据
                    这个技术我们称之为session（会话）

            session
                - session是服务器中的一个对象，这个对象用来存储用户的数据
                - 每一个session对象都有一个唯一的id，id会通过cookie的形式发送给客户端
                - 客户端每次访问时只需将存储有id的cookie发回即可获取它在服务器中存储的数据
                - 在express 可以通过 express-session 组件来实现session功能
                - 使用步骤：
                    ① 安装
                        yarn add express-session
                    ② 引入
                        const session = require("....")
                    ③ 设置为中间件
                        app.use(session({...}))
    */

    // console.log(req.session)
    req.session.username = "megumi"

    res.send("查看session")
})

app.get("/get",(req, res) => {
    const username = req.session.username
    console.log(username)
    res.send("读取session")
})

app.use((req, res) => {
    res.status(404).send("<h1>您访问的页面已经被外星人劫持</h1>")
})

app.listen(3000, () => {
    console.log("服务器已经启动！")
})
