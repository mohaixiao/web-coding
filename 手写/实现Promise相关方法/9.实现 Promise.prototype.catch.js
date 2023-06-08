// 在 JavaScript 中，Promise.prototype.catch() 方法用于指定 Promise 对象被拒绝时的处理方法。这个方法接收一个回调函数作为参数，当 Promise 对象被拒绝时，会调用这个回调函数，并将拒绝的原因作为参数传递给它。

// 下面是手写实现一个 Promise.prototype.catch() 方法的代码示例：

Promise.prototype.myCatch = function (onRejected) {
    return this.then(null, onRejected);
};

// 用法示例
Promise.reject('error message')
    .myCatch(error => {
        console.error(error); // 输出 "error message"
    });

// 在上面的代码示例中，我们通过扩展 Promise.prototype 对象来实现 Promise.prototype.myCatch() 方法。该方法接收一个回调函数作为参数，并返回一个新的 Promise 对象。在内部，我们使用 then 方法来绑定拒绝处理程序，并将 onRejected 回调作为其第二个参数传递给它。由于 then 方法返回一个新的 Promise 对象，因此 myCatch 方法也会返回一个新的 Promise 对象。

// 需要注意的是，如果 Promise 对象已经被解决（即状态已经从 pending 转换为 fulfilled 或 rejected），则在调用 myCatch 方法时，仍然会返回一个新的 Promise 对象。这个新的 Promise 对象将直接继承原始 Promise 对象的状态，并跳过任何 then 方法的处理过程直接执行拒绝处理程序。

// 在实际使用时，我们可以像使用官方 Promise API 中的 catch 方法一样使用 myCatch 方法来捕获 Promise 对象被拒绝时的错误，并进行相应的处理。