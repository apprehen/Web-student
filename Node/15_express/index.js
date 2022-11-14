const express = require("express")
const path = require("path")
const app = express()
const cookieParser = require("cookie-parser")
const session = require("express-session")

const userRouter = require("./routes/user")
const goodsRouter = require("./routes/goods")
// 引入session存储工具的包
const FileStore = require("session-file-store")(session)
app.set("view engine", "ejs")
app.set("views", path.resolve(__dirname, "views"))
app.use(express.static(path.resolve(__dirname, "public")))
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(session({
    secret:"megumi",
		store: new FileStore({
			path: path.resolve(__dirname,'./sessions'),
			secret: 'megumi',
			ttl:3600,
			reapInterval:3600
		}),
		cookie: {
			maxAge: 1000 * 3600
		}
}))

app.use("/students", require("./routes/student"))

/*
	- 跨站请求伪造
	http://localhost:3000/student/delete?id=3
	- 现在大部分的浏览器的都不会再跨域的情况下自动发送cookie
		这个设计就是为了避免csrf攻击
	- 如何解决
		1.使用referer来检查请求的来源
		2.使用验证码
		3.尽量使用post请求(结合token)

	- token(令牌)
		- 可以在创建表单时随机生成一个令牌
			然后将令牌存储到session中，并通过模板发送给用户
			用户提交表单时，必须将token发回，才能进行后续操作
			token可以使用随机(uuid)
*/

app.get("/", (req, res) => {
    res.render("login")
})

app.post("/login", (req, res) => {
	// 获取用户的用户名和密码
	const {username, password} = req.body
	if(username === "admin" && password === "123123"){
		// 登录成功后，将用户信息放入到session中
		// 仅仅将loginUser添加到内存中session而没有将值写入文件中
		req.session.loginUser = username
		// 立刻存储
		req.session.save(()=>{
			res.redirect("/students/list")
		})
	}else{
		res.send("用户名或密码错误")
	}
})

app.get("/logout",(req,res)=>{
	// 使session失效
	req.session.destroy(()=>{
		console.log("销毁辣")
		res.redirect("/")
	})
})

app.use((req, res) => {
    res.status(404).send("<h1>您访问的页面已经被外星人劫持</h1>")
})

app.listen(3000, () => {
    console.log("服务器已经启动！")
})
