// 组合多个函数，从右到左，比如：compose(f, g, h) 最终得到这个结果 (...args) => f(g(h(...args))).

// 题目描述:实现一个 compose 函数
// 用法如下:
function fn1(x) {
    return x + 1;
}
function fn2(x) {
    return x + 2;
}
function fn3(x) {
    return x + 3;
}
function fn4(x) {
    return x + 4;
}
const a = compose(fn1, fn2, fn3, fn4);
console.log(a(1)); // 1+4+3+2+1=11


// compose函数 实现
function compose(...funs) {
    if (funs.length === 0) {
        return arg => arg;
    }
    if (funs.length === 1) {
        return funs[0];
    }
    return funs.reduce((a, b) => (...arg) => a(b(...arg)))
}


// compose创建了一个从右向左执行的数据流。如果要实现从左到右的数据流，可以直接更改compose的部分代码即可实现

// 更换Api接口：把reduce改为reduceRight
// 交互包裹位置：把a(b(...args))改为b(a(...args))