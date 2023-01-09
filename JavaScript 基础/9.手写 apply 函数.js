// apply 函数的实现步骤：
// 1. 判断调用对象是否为函数，即使我们是定义在函数的原型上的，但是可能出现使用 call 等方式调用的情况。
// 2. 判断传入上下文对象是否存在，如果不存在，则设置为 window 。
// 3. 将函数作为上下文对象的一个属性。
// 4. 判断参数值是否传入
// 5. 使用上下文对象来调用这个方法，并保存返回结果。
// 6. 删除刚才新增的属性
// 7. 返回结果



// 与 call 方法的唯一区别就是仅接受两个参数，第一个参数为函数调用时 this 显示绑定的对象，第二个为由函数参数组成的数组
Function.prototype.myApply = function (thisArg, args) {
    // 判断调用对象是否为函数
    if (typeof this !== "function") {
        throw new TypeError("Error");
    }
    // 判断 thisArg 是否存在，如果未传入则为 window
    thisArg = thisArg || window;
    const fnName = Symbol();
    thisArg[fnName] = this;
    let res = null;
    if (args) {
        res = thisArg[fnName](...args);
    } else {
        res = thisArg[fnName]();
    }
    delete thisArg[fnName];
    return res;
};


function foo() {
    console.log(this);
}

foo()

foo.myApply({ 'ok': 1 })