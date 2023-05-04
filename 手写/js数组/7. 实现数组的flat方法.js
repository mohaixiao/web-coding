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


// 有关引用类型的去重
// let a = {"a": 1};
// let b = {"a": 1};
// let c = {"b": 2};
// let nums = [a, b, c];
// uniq(nums)
// 预计结果： [{"a": 1}, {"b": 2}]

// Set 去重 （失效）：
// let a = {"b": 1};
// new Set([a, {"b": 1}]);
// Set(2)


/**
 * @description: 检查两个对象 obj1 和 obj2 是否值相等
 * @param {*} obj1
 * @param {*} obj2
 * @return {*}
 */

function checkObj(obj1, obj2) {
  // 指向同一内存
  if (obj1 === obj2) return true;
  let arr1 = Object.keys(obj1),
    arr2 = Object.keys(obj2);
  // 判断属性值是否相等
  if (arr1.length != arr2.length) return false;
  for (const k in arr1) {
    if (typeof arr1[k] == "object" || typeof arr2[k] == "object") {
      if (!checkObj(arr1[k], arr2[k])) return false;
    } else if (arr1[k] !== arr2[k]) {
      return false;
    }
  }
  return true;
}

/**
 * @description: 在数组原型上写方法
 * @param {*} itemObj
 * @return {*}
 */
Array.prototype.includesObj = function (itemObj) {
  let flag = false;
  for (let i = 0; i < this.length; i++) {
    if (checkObj(this[i], itemObj)) {
      flag = true;
      break;
    }
  }
  return flag;
};

/**
 * @description: 针对对象数组，且可能出现对象引用的问题
 * @param {*} nums
 * @return {*}
 */
function uniqSpecial(nums) {
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    // 如果不存在
    if (!result.includesObj(nums[i])) result.push(nums[i]);
  }
  return result;
}
// let a = { a: 1 };
// let b = { a: 1 };
// let c = { b: 2 };
// let nums = [a, b, c];

// console.log(uniqSpecial(nums));
// [ { a: 1 }, { b: 2 } ]
const arr = [
  { a: 2 },
  { a: 2 },
  { a: 2, b: 1 },
  { a: { b: 1, c: { a: 1 } } },
  { a: { b: 1, c: { a: 1 } } }
]
console.log(uniqSpecial(arr));


// 使用JSON.stringify
function uniqueArray(arr) {
  const res = new Set();

  // 遍历原数组，将每一项深拷贝后放入 Set 中
  arr.forEach((item) => {
    const stringifyItem = JSON.stringify(item);
    if (!res.has(stringifyItem)) {
      // 如果 Set 中没有该项，则将其添加进去
      res.add(stringifyItem);
    }
  });

  // 将 Set 转换为数组输出，这里需要对每一项进行 JSON 解析
  return Array.from(res, (item) => JSON.parse(item));
}

const arr = [
  { a: 2 },
  { a: 2 },
  { a: 2, b: 1 },
  { a: { b: 1, c: { a: 1 } } },
  { a: { b: 1, c: { a: 1 } } }
]

console.log(uniqueArray(arr)); // [{a: 2}, {a: 2, b: 1}, {a: {b: 1, c: {a: 1}}}]
