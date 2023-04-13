Array.prototype.myReduce = function (fn, initialValue) {
    var arr = Array.prototype.slice.call(this);
    var res, startIndex;

    res = initialValue ? initialValue : arr[0]; // 不传默认取数组第一项
    startIndex = initialValue ? 0 : 1;

    for (var i = startIndex; i < arr.length; i++) {
        // 把初始值、当前值、索引、当前数组返回去。调用的时候传到函数参数中 [1,2,3,4].reduce((initVal,curr,index,arr))
        res = fn.call(null, res, arr[i], i, this);
    }
    return res;
}

// test 

// arr = [1,2,3,4,5,6,7,8,9,10]，求和

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
arr.reduce((prev, cur) => { return prev + cur }, 0)

// arr = [1,2,3,[[4,5],6],7,8,9]，求和
let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
arr.flat(Infinity).reduce((prev, cur) => { return prev + cur }, 0)

// arr = [{a:1, b:3}, {a:2, b:3, c:4}, {a:3}]，求和
let arr2 = [{ a: 9, b: 3, c: 4 }, { a: 1, b: 3 }, { a: 3 }]

arr.reduce((prev, cur) => {
    return prev + cur["a"];
}, 0)


// reduce用法汇总
// 语法

array.reduce(function (total, currentValue, currentIndex, arr) { }, initialValue);
/*
  total: 必需。初始值, 或者计算结束后的返回值。
  currentValue： 必需。当前元素。
  currentIndex： 可选。当前元素的索引；                     
  arr： 可选。当前元素所属的数组对象。
  initialValue: 可选。传递给函数的初始值，相当于total的初始值。
*/
// reduceRight() 该方法用法与reduce()其实是相同的，只是遍历的顺序相反，它是从数组的最后一项开始，向前遍历到第一项

// 1. 数组求和
const arr = [12, 34, 23];
const sum = arr.reduce((total, num) => total + num);

// 设定初始值求和
const arr = [12, 34, 23];
const sum = arr.reduce((total, num) => total + num, 10);  // 以10为初始值求和


// 对象数组求和
var result = [
    { subject: 'math', score: 88 },
    { subject: 'chinese', score: 95 },
    { subject: 'english', score: 80 }
];
const sum = result.reduce((accumulator, cur) => accumulator + cur.score, 0);
const sum = result.reduce((accumulator, cur) => accumulator + cur.score, -10);  // 总分扣除10分

// 2. 数组最大值
const a = [23, 123, 342, 12];
const max = a.reduce((pre, next) => pre > cur ? pre : cur, 0); // 342

// 3. 数组转对象
var streams = [{ name: '技术', id: 1 }, { name: '设计', id: 2 }];
var obj = streams.reduce((accumulator, cur) => { accumulator[cur.id] = cur; return accumulator; }, {});

// 4. 扁平一个二维数组
var arr = [[1, 2, 8], [3, 4, 9], [5, 6, 10]];
var res = arr.reduce((x, y) => x.concat(y), []);

// 5. 数组去重
// 实现的基本原理如下：

// ① 初始化一个空数组
// ② 将需要去重处理的数组中的第1项在初始化数组中查找，如果找不到（空数组中肯定找不到），就将该项添加到初始化数组中
// ③ 将需要去重处理的数组中的第2项在初始化数组中查找，如果找不到，就将该项继续添加到初始化数组中
// ④ ……
// ⑤ 将需要去重处理的数组中的第n项在初始化数组中查找，如果找不到，就将该项继续添加到初始化数组中
// ⑥ 将这个初始化数组返回

var newArr = arr.reduce(function (prev, cur) {
    prev.indexOf(cur) === -1 && prev.push(cur);
    return prev;
}, []);

// 6. 对象数组去重

const dedup = (data, getKey = () => { }) => {
    const dateMap = data.reduce((pre, cur) => {
        const key = getKey(cur)
        if (!pre[key]) {
            pre[key] = cur
        }
        return pre
    }, {})
    return Object.values(dateMap)
}

// 7. 求字符串中字母出现的次数

const str = 'sfhjasfjgfasjuwqrqadqeiqsajsdaiwqdaklldflas-cmxzmnha';

const res = str.split('').reduce((pre, next) => {
    pre[next] ? pre[next]++ : pre[next] = 1
    return pre
}, {})

// 结果
// -: 1
// a: 8
// c: 1
// d: 4
// e: 1
// f: 4
// g: 1
// h: 2
// i: 2
// j: 4
// k: 1
// l: 3
// m: 2
// n: 1
// q: 5
// r: 1
// s: 6
// u: 1
// w: 2
// x: 1
// z: 1

// 8. compose函数
function compose(...funs) {
    if (funs.length === 0) {
        return arg => arg;
    }
    if (funs.length === 1) {
        return funs[0];
    }
    return funs.reduce((a, b) => (...arg) => a(b(...arg)))
}
