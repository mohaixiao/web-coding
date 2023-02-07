// 题意的答案
// const add = (num1) => (num2)=> num2 + num1;

// 整了一个加强版 可以无限链式调用 add(1)(2)(3)(4)(5)....
function add(x) {
  // 存储和
  let sum = x;
  // 函数调用会相加，然后每次都会返回这个函数本身
  let tmp = function (y) {
    sum = sum + y;
    return tmp;
  };
  // 对象的toString必须是一个方法 在方法中返回了这个和
  tmp.toString = () => sum;
  return tmp;
}

console.log(add(1)(2)(3)(4)(5).toString());
