/*
    fs.readFile()     读取文件
    fs.appendFile()   创建新文件，或将数据添加到已有文件夹中
    fs.mkdir()        创建目录
    fs.rmdir()        删除目录
    fs.rm()           删除文件夹
    fs.rename()       重命名
    fs.copyFile()     复制文件
*/
const fs = require("node:fs/promises")
const path = require("node:path")

/*
  mkdir 可以接收一个 配置对象作为第二个参数
      通过该对象可以对方法的功能进行配置
        recursive 默认值为false
            - 设置true后会自动创建不存在的上一级目录
*/
fs.mkdir(path.resolve(__dirname,'./hello/abc'),{recursive: true})
  .then(r=>{
    console.log("操作成功")
  })
  .catch(err=>{
    console.log("出错辣")
  })
// fs.rmdir(path.resolve(__dirname,'./hello'),{recursive: true})
//   .then(r=>{
//     console.log("删除成功")
//   })
//   .catch(err=>{
//     console.log("出错辣",err)
//   }) // 甚用
fs.rename(
  path.resolve(__dirname,'./leisai.png'),
  path.resolve(__dirname,'../haihaihai.png')
).then(r=>{
  console.log("重命名成功")
})