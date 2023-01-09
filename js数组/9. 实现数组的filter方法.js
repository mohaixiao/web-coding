const array = [3, 4, 5, 6, 7];
//数组filter
let res = array.filter((item, index, data) => {
    //   console.log(data);
    return item > 5;
});

// console.log(res);

const array = [3, 4, 5, 6, 7];

//自己实现filter
Array.prototype._filter = function (fn, thisArgs) {
    if (typeof fn !== "function") {
        throw Error('参数必须是一个函数');
    }
    const res = [];
    //一定要存一下len
    for (let i = 0, len = this.length; i < len; i++) {
        fn.call(thisArgs, this[i], i, this) && res.push(this[i]);
    }
    return res;
}

//test
let res1 = array._filter((item, index, data) => {
    return item > 5;
});
console.log(res1);
