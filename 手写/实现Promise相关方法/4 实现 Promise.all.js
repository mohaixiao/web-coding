// 对于 all 方法而言，需要完成下面的核心功能:
// ● 传入参数为一个空的可迭代对象，则直接进行resolve。
// ● 如果参数中有一个promise失败，那么Promise.all返回的promise对象失败。
// ● 在任何情况下，Promise.all 返回的 promise 的完成状态的结果都是一个数组

Promise._all = function (promises) {

    if (!(typeof promises === "object" && promises !== null && typeof promises[Symbol.iterator] === "function")) {
        throw new TypeError(`${promises} is not iterable`);
    }
    
    return new Promise((resolve, reject) => {
        let count = 0; //计数器 不能使用promises.length
        let result = []; //结果
        promises = [...promises];
        const len = promises.length;

        if (len === 0) {
            resolve(result);
        }

        for (let i = 0; i < len; i++) {
            // 注意有的数组项有可能不是Promise，需要手动转化一下  确保每一项都是promise
            Promise.resolve(promises[i])
                .then(res => {
                    result[i] = res;
                    if (len == ++count) {
                        resolve(result);
                    }
                })
                .catch(e => {
                    reject(e);
                });
        }
    });
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

const p11 = Promise._all([p1, p2, p3])
    .then(console.log) // [ 1, 2, 3 ]
    .catch(console.log);

// 2. 有一个Promise失败了
const p12 = Promise._all([p1, p2, p4]).then(console.log).catch(console.log); // err4