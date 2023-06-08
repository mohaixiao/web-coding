// Promise.reject 中传入的参数会作为一个 reason 原封不动地往下传, 实现如下:

Promise.myReject = function (reason) {
    return new Promise((resolve, reject) => {
        reject(reason); // reject 方法会将 Promise 状态设置为 rejected，并将原因作为参数传递给 onRejected 回调函数
    });
}

// 用法示例
Promise.myReject('error message').catch(error => {
    console.error(error); // 输出 "error message"
});


// 手动创建一个 Promise 对象，并在内部调用 reject 方法将 Promise 状态设置为 rejected。然后，我们将 Promise 对象作为返回值，以便调用者可以通过链式调用 then 或 catch 方法来处理 Promise 对象的状态。

// 使用手写的 Promise.reject() 方法时，需要注意以下几点：

// reject 方法会立即将 Promise 的状态设置为 rejected，因此不需要等待异步操作完成。

// 如果在 Promise 对象的状态已经设置为 resolved 的情况下调用了 reject 方法，则调用将被忽略。

// 可以在 Promise 对象的任何状态下调用 reject 方法，但是一旦状态被设置为 rejected，则无法再将状态改为 resolved。因此，在调用 reject 方法之前，需要仔细考虑是否真的需要拒绝 Promise 对象。