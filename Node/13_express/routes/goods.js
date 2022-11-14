const express = require("express")

// 创建router对象
const router = express.Router()

router.get("/list", (req, res) => {
    res.send("hello 我是商品的hello路由")
})

// 将router暴露到模块外
module.exports = router
