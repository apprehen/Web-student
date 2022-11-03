// console.log(1);

// setTimeout(() => console.log(2));

// Promise.resolve().then(() => console.log(3));

// Promise.resolve().then(() => setTimeout(() => console.log(4)));

// Promise.resolve().then(() => console.log(5));

// setTimeout(() => console.log(6));

// console.log(7);
// 1 7 3 5 2 6 4
const STUDENT_ARR = [
  {
    name:'孙悟空',
    age:18,
    add:'花果山',
    gender:'♂'
  },
  {
    name:'猪八戒',
    age:28,
    add:'高老庄',
    gender:'♂'
  },
  {
    name:'沙和尚',
    age:38,
    add:'流沙河',
    gender:'♂'
  },
]
for(item of STUDENT_ARR) {
  console.log(item)
}