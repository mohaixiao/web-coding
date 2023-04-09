// 前面的promise不管成功还是失败，都会走到finally中，并且finally之后，还可以继续then（说明它还是一个then方法是关键），并且会将初始的promise值原封不动的传递给后面的then.
// Promise.prototype.finally最大的作用
// ● finally里的函数，无论如何都会执行，并会把前面的值原封不动传递给下一个then方法中
// ● 如果finally函数中有promise等异步任务，会等它们全部执行完毕，再结合之前的成功与否状态，返回值

// 源码实现
Promise.prototype.finally = function (callback) {
    return this.then(async (data) => {
        // 让函数执行 内部会调用方法，如果方法是promise，需要等待它完成
        // 如果当前promise执行时失败了，会把err传递到，err的回调函数中
        await Promise.resolve(callback());
        return data; // data 上一个promise的成功态
    }, async err => {
        await Promise.resolve(callback());
        throw err; // 把之前的失败的err，抛出去
    })
}


// Promise.prototype.finally六大情况用法

// 情况1
Promise.resolve(123).finally((data) => { // 这里传入的函数，无论如何都会执行
    console.log(data); // undefined
})

// 情况2 (这里，finally方法相当于做了中间处理，起一个过渡的作用)
Promise.resolve(123).finally((data) => {
    console.log(data); // undefined
}).then(data => {
    console.log(data); // 123
})

// 情况3 (这里只要reject，都会走到下一个then的err中)
Promise.reject(123).finally((data) => {
    console.log(data); // undefined
}).then(data => {
    console.log(data);
}, err => {
    console.log(err, 'err'); // 123 err
})

// 情况4 (一开始就成功之后，会等待finally里的promise执行完毕后，再把前面的data传递到下一个then中)
Promise.resolve(123).finally((data) => {
    console.log(data); // undefined
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('ok');
        }, 3000)
    })
}).then(data => {
    console.log(data, 'success'); // 123 success
}, err => {
    console.log(err, 'err');
})

// 情况5 (虽然一开始成功，但是只要finally函数中的promise失败了，就会把其失败的值传递到下一个then的err中)
Promise.resolve(123).finally((data) => {
    console.log(data); // undefined
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('rejected');
        }, 3000)
    })
}).then(data => {
    console.log(data, 'success');
}, err => {
    console.log(err, 'err'); // rejected err
})

// 情况6 (虽然一开始失败，但是也要等finally中的promise执行完，才能把一开始的err传递到err的回调中)
Promise.reject(123).finally((data) => {
    console.log(data); // undefined
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('resolve');
        }, 3000)
    })
}).then(data => {
    console.log(data, 'success');
}, err => {
    console.log(err, 'err'); // 123 err
})

