const express = require("express")
const router = express.Router()

router.get("/list",(req,res)=>{
  res.send("Hello 我是goods路由")
})

module.exports = router