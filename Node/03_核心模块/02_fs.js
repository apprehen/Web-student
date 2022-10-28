const fs = require("node:fs/promises")
const path = require("node:path")
const { buffer } = require("stream/consumers")
/*
    fs.readFile()     读取文件
    fs.appendFile()   创建新文件，或将数据添加到已有文件夹中
    fs.mkdir()        创建目录
    fs.rmdir()        删除目录
    fs.rm()           删除文件夹
    fs.rename()       重命名
    fs.copyFile()     复制文件
*/
fs.appendFile(
  path.resolve(__dirname,'./hello123.txt'),
  '\n嗨嗨嗨'
).then(r => {
  console.log("操作结束了捏！")
})
// 复制一个文件
fs.readFile("E:\\Beautiful\\avter\\3.png")
  .then(buffer=>{
    // 作为返回值 重新返回promise
    fs.appendFile(
      path.resolve(__dirname,'./leisai.png'),
      buffer
    )
  }).then(r=>{
    console.log("复制成功捏")
  })