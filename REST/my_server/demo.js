//引入jwt
const jwt = require("jsonwebtoken")

// 创建一个对象
const obj = {
  name:'megumi',
  age: 18,
  gender: '♀'
}
// 使用jwt来对json进行数据加密
const token = jwt.sign(obj,"kurumi",{
  expiresIn:'1day'
})
// console.log(token)
try{
  const decodeData = jwt.verify(token,"kurumi")
  console.log(decodeData)
} catch (e) {
  console.log("无效token")
}