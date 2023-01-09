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
