// MDN: Promise.allSettled()方法返回一个在所有给定的promise都已经fulfilled或rejected后的promise，并带有一个对象数组，每个对象表示对应的promise结果

// 当您有多个彼此不依赖的异步任务成功完成时，或者您总是想知道每个promise的结果时，通常使用它。

// 【译】Promise.allSettled 跟 Promise.all 类似, 其参数接受一个Promise的数组, 返回一个新的Promise, 唯一的不同在于, 其不会进行短路, 也就是说当Promise全部处理完成后我们可以拿到每个Promise的状态, 而不管其是否处理成功。

function isPromise(val) {
    return typeof val.then === 'function'; // (123).then => undefined
}

Promise.allSettled = function (promises) {
    return new Promise((resolve, reject) => {
        let arr = [];
        let times = 0;
        const setData = (index, data) => {
            arr[index] = data;
            if (++times === promises.length) {
                resolve(arr);
            }
            console.log('times', times)
        }

        for (let i = 0; i < promises.length; i++) {
            let current = promises[i];
            if (isPromise(current)) {
                current.then((data) => {
                    setData(i, { status: 'fulfilled', value: data });
                }, err => {
                    setData(i, { status: 'rejected', value: err })
                })
            } else {
                setData(i, { status: 'fulfilled', value: current })
            }
        }
    })
}




Promise.allSettled = function (promises) {
    if (!(typeof promises == 'object' && typeof promises[Symbol.iterator] == "function" && promises !== null)) {
        throw new Error("Type Error")
    }

    return new Promise((resolve, reject) => {
        let count = 0;
        promises = [...promises];
        let len = promises.length;
        let result = [];
        if (len == 0) {
            resolve(result)
        }
        for (let i = 0; i < len; i++) {
            Promise.resolve(promises[i]).then((res) => {
                result.push({ status: 'fulfilled', value: res })
                if (++count == len) {
                    resolve(result);
                }
            }, err => {
                result.push({ status: 'rejected', value: err })
                if (++count == len) {
                    resolve(result);
                }
            })
        }
    })
}


//test
const p1 = Promise.resolve(1);
const p2 = new Promise(resolve => {
    setTimeout(() => resolve(2), 1000);
});
const p3 = new Promise(resolve => {
    setTimeout(() => resolve(3), 3000);
});

const p4 = Promise.reject('err4');
// const p5 = Promise.reject('err5');

const p11 = Promise.allSettled([p1, p2, p3])
    .then(console.log) // [ 1, 2, 3 ]
    .catch(console.log);

// 2. 有一个Promise失败了
const p12 = Promise.allSettled([p1, p2, p4]).then(console.log).catch(console.log); // err4