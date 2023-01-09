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

