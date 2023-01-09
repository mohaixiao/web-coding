// 函数柯里化概念： 柯里化（Currying）是把接受多个参数的函数转变为接受一个单一参数的函数，并且返回接受余下的参数且返回结果的新函数的技术。

// 1）粗暴版

function add(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        }
    }
}
console.log(add(1)(2)(3)); // 6

// 2）柯里化解决方案
// ● 参数长度固定
var add = function (m) {
    var temp = function (n) {
        return add(m + n);
    }
    temp.toString = function () {
        return m;
    }
    return temp;
};
console.log(add(3)(4)(5)); // 12
console.log(add(3)(6)(9)(25)); // 43

// 对于add(3)(4)(5)，其执行过程如下：
// 1. 先执行add(3)，此时m = 3，并且返回temp函数；
// 2. 执行temp(4)，这个函数内执行add(m + n)，n是此次传进来的数值4，m值还是上一步中的3，所以add(m + n) = add(3 + 4) = add(7)，此时m = 7，并且返回temp函数
// 3. 执行temp(5)，这个函数内执行add(m + n)，n是此次传进来的数值5，m值还是上一步中的7，所以add(m + n) = add(7 + 5) = add(12)，此时m = 12，并且返回temp函数
// 4. 由于后面没有传入参数，等于返回的temp函数不被执行而是打印，了解JS的朋友都知道对象的toString是修改对象转换字符串的方法，因此代码中temp函数的toString函数return m值，而m值是最后一步执行函数时的值m = 12，所以返回值是12。

// ● 参数长度不固定

function add(...args) {
    //求和
    return args.reduce((a, b) => a + b)
}
function currying(fn) {
    let args = []
    return function temp(...newArgs) {
        // 有传参
        if (newArgs.length) {
            args = [
                ...args,
                ...newArgs
            ]
            return temp
        } else {
            // 没传参
            let val = fn.apply(this, args)
            args = [] //保证再次调用时清空
            return val
        }
    }
}

let addCurry = currying(add)
console.log(addCurry(1)(2)(3)(4, 5)())  //15
console.log(addCurry(1)(2)(3, 4, 5)())  //15
console.log(addCurry(1)(2, 3, 4, 5)())  //15

