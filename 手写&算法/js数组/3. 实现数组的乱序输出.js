// （1）使用数组 sort 方法对数组元素随机排序，让 Math.random() 出来的数与 0.5 比较，如果大于就返回 1 交换位置，如果小于就返回 -1，不交换位置。

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arr.sort(randomSort);
function randomSort(a, b) {
    return Math.random() > 0.5 ? -1 : 1;
}

//  缺点：每个元素被派到新数组的位置不是随机的，原因是 sort() 方法是依次比较的。

// （2）随机从原数组抽取一个元素，加入到新数组

function randomSort(arr) {
    var result = [];

    while (arr.length > 0) {
        var randomIndex = Math.floor(Math.random() * arr.length);
        result.push(arr[randomIndex]);
        arr.splice(randomIndex, 1);
    }

    return result;
}

// （3）随机交换数组内的元素（洗牌算法类似）
// 主要的实现思路就是：
// 取出数组的第一个元素，随机产生一个索引值，将该第一个元素和这个索引对应的元素进行交换。
// 第二次取出数据数组第二个元素，随机产生一个除了索引为1的之外的索引值，
// 并将第二个元素与该索引值对应的元素进行交换
// 按照上面的规律执行，直到遍历完成

function randomSort(arr) {
    for (var i = 0; i < arr.length; i++) {
        const randomIndex = Math.round(Math.random() * (arr.length - 1 - i)) + i;
        [arr[i], arr[randomIndex]] = [arr[randomIndex], arr[i]];
    }

    return arr;
}
// (4) ES6
class SuperArray extends Array {
    shuffle() {
        // 洗牌算法
        for (let i = this.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this[i], this[j]] = [this[j], this[i]]; // ES6
        }
    }
}
// test
let a = new SuperArray(1, 2, 3, 4, 5);
console.log(a instanceof Array); // true 
console.log(a instanceof SuperArray); // true
console.log(a); // [1, 2, 3, 4, 5] 
a.shuffle();
console.log(a); // [3, 1, 4, 5, 2]