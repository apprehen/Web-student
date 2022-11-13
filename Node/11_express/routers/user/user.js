const express = require("express")
const router = express.Router()

router.get("/list",(req,res)=>{
  res.send("Hello 我是user路由")
})

// 暴露模块
module.exports = router