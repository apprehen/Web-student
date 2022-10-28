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
const result = path.resolve(__dirname,'./hello.js')
console.log(result)