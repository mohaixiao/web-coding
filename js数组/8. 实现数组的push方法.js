let arr = [1, [2, [3, 4]]];
Array.prototype.push = function () {
    // 推入数组末尾
    for (let i = 0; i < arguments.length; i++) {
        this[this.length] = arguments[i];
    }
    // 返回数组长度
    return this.length;
}
console.log(arr.push(1, 1, 1, 1, 1)); //  [1, 2, 3, 4，5]
console.log(arr);