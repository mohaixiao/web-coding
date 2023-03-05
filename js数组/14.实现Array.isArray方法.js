Array.myIsArray = function (o) {
    // 调用顶级对象上的toString方法转成[object Array]形式
    return Object.prototype.toString.call(o) === '[object Array]';
};

console.log(Array.myIsArray([])); // true