let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let sum = arr.reduce((total, i) => total += i, 0);
console.log(sum);

// 打平+求和
var arr = [1, 2, 3, [[4, 5], 6], 7, 8, 9]
let arr1 = arr.toString().split(',').reduce((total, i) => total += Number(i), 0);
console.log(arr1);

// 递归实现：
let arr = [1, 2, 3, 4, 5, 6]

function add(arr) {
    if (arr.length == 1) return arr[0]
    return arr[0] + add(arr.slice(1))
}
console.log(add(arr)) // 21

const arr = []
// 求0~100000的和
for (let i = 0; i <= 100000; i++) { arr.push(i) }

function getSum(arr) {
    return (arr[0] + arr[arr.length - 1]) * arr.length / 2
}
const sum = getSum(arr)
console.log(sum)