const arr = [1, 1, 2, 3, 3];
// 期望得到：[1, 2, 3]

// 方法一：for 配合新数组截取
const newArr1 = [];
for (let i = 0; i < arr.length; i++) {
    if (!newArr1.includes(arr[i])) {
        newArr1.push(arr[i]);
    }
}
console.log('newArr1：', newArr1);

// 1. 双层 for 循环

function distinct(arr) {
    for (let i = 0, len = arr.length; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            if (arr[i] == arr[j]) {
                arr.splice(j, 1);
                // splice 会改变数组长度，所以要将数组长度 len 和下标 j 减一
                len--;
                j--;
            }
        }
    }
    return arr;
}

// 思想: 双重 for 循环是比较笨拙的方法，它实现的原理很简单：先定义一个包含原始数组第一个元素的数组，然后遍历原始数组，将原始数组中的每个元素与新数组中的每个元素进行比对，如果不重复则添加到新数组中，最后返回新数组；因为它的时间复杂度是O(n^2)，如果数组长度很大，效率会很低

// 方法二：使用 Set
const newArr2 = [...new Set(arr)];
console.log('newArr2：', newArr2);

const array = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];

Array.from(new Set(array)); // [1, 2, 3, 5, 9, 8]

// 方法三：使用 filter
const newArr3 = arr.filter((item, index) => arr.lastIndexOf(item) === index);
console.log('newArr3：', newArr3);

// 方法四：使用indexOf
var arr2 = [1, 2, 3, 4, 3, 1];
function unique(arr) {
    var brr = [];
    for (var i = 0; i < arr.length; i++) {
        if (brr.indexOf(arr[i]) == -1) {
            brr.push(arr[i]);
        }
    }
    return brr;
}
console.log(unique(arr2));

// 使用sort
var arr3 = [1, 2, 3, 4, 5, 3];
function unique(arr) {
    arr = arr.sort();
    var brr = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i - 1]) {
            brr.push(arr[i]);
        }
    }
    return brr;
}
console.log(unique(arr3));

// 不使用数组API

// 使用2个数组
function web(arr) {
    //创建一个hash数组，再创建一个用于存放去重后元素的数组arr1
    for (var i = 0, hash = [], arr1 = []; i < arr.length; i++) {
        //arr里中的元素就是hash数组的下标
        if (hash[arr[i]] === undefined) {
            //满足条件的传入arr1
            arr1[arr1.length] = arr[i];
            //给hash循环传入数据
            hash[arr[i]] = '';
        }
    }
    //返回去重后的数组arr1
    return arr1;
}
console.log(web([1, 2, 3, 33, 7, 8, 8, 1, 56, 88, 7, 2, 3]));

// ES5方法：使用map存储不重复的数字

const array1 = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];

uniqueArray(array1); // [1, 2, 3, 5, 9, 8]

function uniqueArray(array) {
    let map = {};
    let res = [];
    for (var i = 0; i < array.length; i++) {
        if (!map.hasOwnProperty([array[i]])) {
            map[array[i]] = 1;
            res.push(array[i]);
        }
    }
    return res;
}

function unique(arr) {
    //遍历数组arr，创建空数组result，用来装arr中不重复的值（重复的值只留一个）
    for (var i = 0, result = []; i < arr.length; i++) {
        //遍历数组result
        for (var j = 0; j < result.length; j++) {
            //令arr中的值与result的值作比较，若相等，则开始下一个值的循环，若不等，跳出循环
            if (arr[i] == result[j]) {
                break;
            }
        }
        //若在result中没有找到与arr[i]相等的数，就将arr[i]添加到result
        if (result.length == j) {
            result[result.length] = arr[i]
        }
    }
    //返回 result的当前值
    return result;
}
//定义数组的元素
var arr = [1, 2, 2, 4, 9, 6, 6, 7, 5, 2, 3, 5, 6, 5];
console.log(unique(arr))


// reduce 实现对象数组去重复

var resources = [
    { name: "张三", age: "18" },
    { name: "张三", age: "19" },
    { name: "张三", age: "20" },
    { name: "李四", age: "19" },
    { name: "王五", age: "20" },
    { name: "赵六", age: "21" }
]
var temp = {};
resources = resources.reduce((prev, curv) => {
    // 如果临时对象中有这个名字，什么都不做
    if (temp[curv.name]) {

    } else {
        // 如果临时对象没有就把这个名字加进去，同时把当前的这个对象加入到prev中
        temp[curv.name] = true;
        prev.push(curv);
    }
    return prev
}, []);
console.log("结果", resources);

// 这种方法是利用高阶函数 reduce 进行去重， 这里只需要注意initialValue得放一个空数组[]，不然没法push

// 对象数组如何去重
// 根据每个对象的某一个具体属性来进行去重

const responseList = [
    { id: 1, a: 1 },
    { id: 2, a: 2 },
    { id: 3, a: 3 },
    { id: 1, a: 4 },
];

const result = responseList.reduce((acc, cur) => {
    const ids = acc.map(item => item.id);
    return ids.includes(cur.id) ? acc : [...acc, cur];
}, []);
console.log(result); // -> [ { id: 1, a: 1}, {id: 2, a: 2}, {id: 3, a: 3} ]


// 使用JSON.stirngify
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


function deepEqual(obj1, obj2) {
    // 如果两个对象都不是引用类型，直接比较它们是否相等
    if (typeof obj1 !== 'object' || obj1 === null ||
        typeof obj2 !== 'object' || obj2 === null) {
        return obj1 === obj2;
    }

    // 获取两个对象的所有属性
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    // 如果属性数量不同，两个对象不相等
    if (keys1.length !== keys2.length) {
        return false;
    }

    // 遍历第一个对象的所有属性，递归比较第二个对象的对应属性
    for (const key of keys1) {
        // 如果第二个对象中没有这个属性，两个对象不相等
        if (!keys2.includes(key)) {
            return false;
        }

        const val1 = obj1[key];
        const val2 = obj2[key];

        // 递归判断两个嵌套的对象是否相等
        if (!deepEqual(val1, val2)) {
            return false;
        }
    }

    return true;
}

function deepUnique(arr) {
    const seen = new Set(); // 用来存储已经出现过的对象

    return arr.filter((item) => {
        // 如果该项是原始类型，直接返回true保留
        if (typeof item !== 'object' || item === null) {
            return true;
        }

        // 否则，遍历该项的属性，对每一个属性进行递归比较
        for (const key in item) {
            const value = item[key];

            if (typeof value === 'object' && value !== null) {
                // 遇到嵌套对象或数组，则递归去重
                item[key] = deepUnique([value])[0];
            }
        }

        // 判断该项是否已经出现过
        for (const seenItem of seen) {
            if (deepEqual(item, seenItem)) {
                // 如果出现过，则过滤掉当前项
                return false;
            }
        }

        // 否则，将该项加入已经出现过的Set中，并保留该项
        seen.add(item);
        return true;
    });
}

const arr = [
    { a: 2 },
    { a: 2 },
    { a: 2, b: 1 },
    { a: { b: 1, c: { a: 1 } } },
    { a: { b: 1, c: { a: 1 } } }
];

console.log(deepUnique(arr)); // [{a: 2}, {a: 2, b: 1}, {a: {b: 1, c: {a: 1}}}]


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
let a = { a: 1 };
let b = { a: 1 };
let c = { b: 2 };
let nums = [a, b, c];

console.log(uniqSpecial(nums));
  // [ { a: 1 }, { b: 2 } ]