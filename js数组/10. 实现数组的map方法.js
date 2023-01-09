const arr = [3, 4, 5, 6, 7];
//数组map方法
// arr.map((item, index, arr) => { return item + 1 }, this);
//看看原本的map
//接受两个参数一个是函数 一个是this
//函数中接受的参数是 每一个item index索引 arr数组本身
Array.prototype._map = function (fn, thisArgs) {
    if (typeof fn !== "function") {
        throw Error('参数必须是一个函数');
    }
    const res = [];
    //length要单独取出来，不然如果调用第三个参数arr会导致错误
    for (let i = 0, len = this.length; i < len; i++) {
        //绑定this后传入 三个参数
        //1.item
        //2.index
        //3.数组本身
        res.push(fn.call(thisArgs, this[i], i, this));
    }
    return res;
}

//test测试
const arr1 = arr._map((item, index, arr) => arr.push(1));
console.log(arr);
console.log(arr1); // 收集的是arr数组的长度变化

const test = [1, 2, 3, 4, 5];
let testA = test.map((item, index, arr) => {
    // console.log(arr);
    // console.log(index);
    return item + 1;
});
console.log(testA);
