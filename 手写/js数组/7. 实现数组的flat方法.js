// 题目描述: 实现一个方法使多维数组变成一维数组

// 第一种处理:直接的调用
arr_flat = arr.flat(Infinity);

// 第二种处理
let ary1 = [1, [2, [3, [4, 5]]], 6];
let str = JSON.stringify(ary1);
str = str.replace(/(\[|\])/g, '');
str = '[' + str + ']';
ary = JSON.parse(str);
console.log(ary);


// 第三种处理：递归处理
function flatten(ary) {
  let result = [];
  let fn = function (arr) {
    for (let i = 0; i < arr.length; i++) {
      let item = arr[i];
      if (Array.isArray(arr[i])) {
        fn(item);
      } else {
        result.push(item);
      }
    }
  }
  fn(ary);
  return result;
}

let ary = [1, 2, [3, 4], [5, [6, 7]]]
console.log(flatten(ary))

// 第四种处理：用 reduce 实现数组的 flat 方法
function flatten(ary) {
  return ary.reduce((pre, cur) => {
    return pre.concat(Array.isArray(cur) ? flatten(cur) : cur);
  }, []);
}
let ary = [1, 2, [3, 4], [5, [6, 7]]]
console.log(flatten(ary))


// 第五种处理：能用迭代的思路去实现,扩展运算符
function flatten(arr) {
  if (!arr.length) return;
  while (arr.some((item) => Array.isArray(item))) {
    arr = [].concat(...arr);
  }
  return arr;
}
console.log(flatten([1, 2, [1, [2, 3, [4, 5, [6]]]]]));



