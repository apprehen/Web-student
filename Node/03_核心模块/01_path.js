/*
  path
      - 表示的路径
      - 通过path可以获取各种路径
      - 要使用path，需要先对其进行引入
      - 方法:
          path.resolve([...paths])
              - 用来生成一个绝对路径
                  相对路径：
                    - 在计算机本地
                        C:\xxx
                        /User/xxxx
                    - 在网络中
                        http://www.xxxx/...
                        https://www.xxx/...
								- 如果直接调用resolve，则返回当前的工作目录
									- 注意我们通过不同的方式执行代码，它的工作目录可能会不一样 (使用__dirname)
								- 如果将一个相对路径作为参数
									- 则resolve会自动将其转换为绝对路径

								- 一般会将一个绝对路径作为第一个参数
									一个相对路径作为第二个参数
									这样他会自动计算出最终路径
*/
const path = require("node:path")
// 不会这样写，调用方式不同生成路径不同
// const result = path.resolve("./hello.js")
// const result = path.resolve(
// 	"E:\\Web\\Web-student\\Node\\03_包管理器",
// 	"./Hello.js"
// )

// 最终形态,好使,不会根据系统不同而不一样,保证正常运行
// 使用路径时，尽量通过path.resolve() 来生成路径
const result = path.resolve(__dirname,'./hello.js')
// console.log(result)

/*
		fs (File System)
				- fs用来帮助node来操作磁盘中的文件
				- 文件操作也就是所谓的I/O流 input output	
				- 使用fs模块，同样需要引入
*/
const fs = require("node:fs/promises")

/*
	Promise版本的fs的方法
*/
fs.readFile(path.resolve(__dirname,'./hello.txt'))
	.then(buffer => {
		console.log(buffer.toString())
	})
	.catch(e=>{
		console.log("出错了~~")
	})

	// async await 语法糖
;(async () => {
	try {
		const buffer = await fs.readFile(path.resolve(__dirname,'./hello.txt'))
		console.log(buffer)
	}	catch (e) {
		console.log("出错了捏")
	}
})()



// readFileSync() 同步的读取文件的方式，会阻塞后边的代码的执行 (不推荐)
// 当我们通过fs模块读取磁盘中的数据时，读取到的数据总会以Buffer对象的形式返回
// Buffer 是一个临时用来储存数据的缓冲区
const buf = fs.readFileSync(path.resolve(__dirname,"./hello.txt")) // 尽量别写相对路径 
// console.log(buf.toString())

// 异步的读取文件方法 (也不推荐)
fs.readFile(
	path.resolve(__dirname,'./hello.txt'),
	(err,buffer)=>{
		if(err){
			console.log("出错了")
		} else {
			console.log(buffer.toString())
		}
	}
)