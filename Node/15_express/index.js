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
			// path 用来指定存储路径
			path: path.resolve(__dirname,'./sessions'),
			// 指定加密
			secret: 'megumi',
			// session的最大闲置有效时间 秒 默认一小时
			ttl:3600,
			// 默认情况下，fileStore会间隔一小时，清除一次session对象
			// reapInterval 用来指定清除session的间隔 单位默认s 默认一小时
			reapInterval:3600
		}),
		cookie: {
			maxAge: 1000 * 3600
		}
}))

/*
  session 是服务器创建的一个对象，这个对象用来储存用户的信息
		- 每一个session都会有一个唯一的id，session创建后id会以cookie的形式发送给浏览器
	浏览器收到以后，每次访问都会将id发回，服务器中就可以根据id找到对应的session

	id(cookie) --------> session 对象
	session什么时候会失效？
		第一种：浏览器的cookie没了
		第二种：服务器中的session对象没了

	express-session 默认是将session存储在内存中，所以服务器一旦重启session就失效辣
		考虑使用session通常会对session进行一个持久化的操作(写到文件中或者数据库里)
	
	如果将session存储到文件中
		- 需要引入一个中间件 session-file-store
		- 使用步骤：
				1.安装
					yarn add session-file-store
				2.引入
					const FileStore = require("session-file-store")(session)
				3.设置为中间件
				app.use(session({
						secret:"megumi",
						store: new FileStore({})
				}))
*/ 

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
