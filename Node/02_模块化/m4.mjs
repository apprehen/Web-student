/*
  ES 模块化
*/
// 向外导出内容
export let a = 10
export let b = "孙悟空"
export let c = {name:'猪八戒'}
export let d = ()=>{
  console.log(111)
}
console.log('嗨嗨嗨')
// 设置默认导出
export default function sum (a, b) { 
  return a+b
}