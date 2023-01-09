// race 的实现相比之下就简单一些，只要有一个 promise 执行完，直接 resolve 并停止执行

Promise.race = function (promises) {
    return new Promise((resolve, reject) => {
        let len = promises.length;
        if (len === 0) return;
        for (let i = 0; i < len; i++) {
            Promise.resolve(promise[i]).then(data => {
                resolve(data);
                return;
            }).catch(err => {
                reject(err);
                return;
            })
        }
    })
}