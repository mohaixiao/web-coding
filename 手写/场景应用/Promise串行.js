// https://juejin.cn/post/6844903801296519182#heading-0

function delay(time) {
    return new Promise((resolve, reject) => {
        console.log(`wait ${time}s`)
        setTimeout(() => {
            console.log('execute');
            resolve()
        }, time * 1000)
    })
}

const arr = [3, 4, 5];

// 方式1.reduce

arr.reduce((s, v) => {
    return s.then(() => delay(v))
}, Promise.resolve())
    // 比较简单和常见的方式
    // 方式2.async + 循环 + await
    (
        async function () {
            for (const v of arr) {
                await delay(v)
            }
        }
    )()
// 本质上使用了async / await的功能
// 方式3.普通循环
// 其实仔细想想方式1的本质是使用一个中间变量（上一次执行结果）来保存链式Promise, 那我们举一反三， 换别的循环也可以实现

let p = Promise.resolve()
for (const i of arr) {
    p = p.then(() => delay(i))
}
// 理论上所有循环方式都能实现，只要找到一个保存链式Promise的地方，闭包也好，参数也好。
// 其实使用while循环时遇到一些坑，例如这样写。

let i
let p = Promise.resolve()
while (i = arr.shift()) {
    p = p.then(() => delay(i))
}
// 思路没啥问题，问题就在于i放在外层时实际上每次都被改动，这和一道经典的面试题一样

for (var i = 0, i < 5, i++) {
    setTimeout(() => {
        console.log(i)
    }, i * 1000)
}
// 事实上他们都会输出5。所以对于while循环，我们需要在内部也保存一份，最后我改成这样，感觉有点蠢，不过也没想到其他办法

let i
let p = Promise.resolve()
while (i = arr.shift()) {
    let s = i
    p = p.then(() => delay(s))
}
// 方式4.递归
// 这是面试官提供的思路，也提到了koa，其实koa自己也有研究，其中洋葱模型来自于koa - compose库。

function dispatch(i, p = Promise.resolve()) {
    if (!arr[i]) return Promise.resolve()
    return p.then(() => dispatch(i + 1, delay(arr[i])))
}
dispatch(0)

// 方式5.for await of
// 通过查阅了for await of的规则，其实for await of和for of规则类似，只需要实现一个内部[Symbol.asyncIterator]方法即可

function createAsyncIterable(arr) {
    return {
        [Symbol.asyncIterator]() {
            return {
                i: 0,
                next() {
                    if (this.i < arr.length) {
                        return delay(arr[this.i]).then(() => ({ value: this.i++, done: false }));
                    }

                    return Promise.resolve({ done: true });
                }
            };
        }
    }
}

(async function () {
    for await (i of createAsyncIterable(arr)) { }
})();
// 先创建出一个可异步迭代对象，然后丢到for await of循环即可
// 方式6.generator

function* gen() {
    for (const v of arr) {
        yield delay(v)
    }
}

function run(gen) {
    const g = gen()

    function next(data) {
        const result = g.next(data)
        if (result.done) return result.value
        result.value.then(function (data) {
            next(data)
        })
    }

    next()
}

run(gen)
// 先创建一个generator函数，然后再封装一个自执行run函数

