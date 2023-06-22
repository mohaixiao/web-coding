// 三种方法
let arr = [5, 2, 7, 9]
// let res = Math.max(...arr)
// let res = arr.sort(function(a, b) { return a -b })[arr.length-1]
let res = arr[0]
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > res) {
        res = arr[i]
    }
}
console.log(res);