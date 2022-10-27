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

*/
const path = require("node:path")
console.log(path)