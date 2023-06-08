// 1. 定义 Promise 构造函数
function MyPromise(executor) {
    // 2. 定义 Promise 初始状态和值
    this._status = 'pending';
    this._value = undefined;

    // 3. 定义 Promise 内部使用的 resolve 方法
    const resolve = value => {
        if (this._status === 'pending') {
            this._status = 'fulfilled';
            this._value = value;
        }
    };

    // 4. 定义 Promise 内部使用的 reject 方法
    const reject = reason => {
        if (this._status === 'pending') {
            this._status = 'rejected';
            this._value = reason;
        }
    };

    // 5. 执行 executor 函数，并将 resolve 和 reject 方法作为参数传递给它
    try {
        executor(resolve, reject);
    } catch (error) {
        reject(error);
    }
}

// 6. 定义 then 方法
MyPromise.prototype.then = function (onFulfilled, onRejected) {
    // 6.1 如果 onFulfilled 不是函数，则创建一个默认的 onFulfilled 函数
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;

    // 6.2 如果 onRejected 不是函数，则创建一个默认的 onRejected 函数
    onRejected = typeof onRejected === 'function' ? onRejected : reason => { throw reason; };

    // 6.3 定义一个新的 Promise 对象，用于返回处理结果
    const newPromise = new MyPromise((resolve, reject) => {
        // 6.4 定义一个内部函数，用于处理 Promise 对象状态变化
        const handle = callback => {
            try {
                const result = callback(this._value);
                if (result instanceof MyPromise) {
                    // 6.4.1 如果回调函数返回的是 Promise，则等待其执行完成后再继续执行下一步操作
                    result.then(resolve, reject);
                } else {
                    // 6.4.2 如果回调函数返回的不是 Promise，则直接将其返回值作为下一步操作的参数，并执行下一步操作
                    resolve(result);
                }
            } catch (error) {
                // 6.4.3 如果回调函数抛出异常，则将 Promise 对象状态设置为 rejected，并将错误原因作为拒绝理由
                reject(error);
            }
        };

        // 6.5 根据 Promise 对象当前状态选择合适的回调函数进行处理
        if (this._status === 'pending') {
            // 6.5.1 如果当前状态为 pending，则将回调函数添加到处理队列中等待执行
            this._fulfillCallbacks.push(() => handle(onFulfilled));
            this._rejectCallbacks.push(() => handle(onRejected));
        } else if (this._status === 'fulfilled') {
            // 6.5.2 如果当前状态为 fulfilled，则直接执行 onFulfilled 回调函数，并将其返回值作为下一步操作的参数
            setTimeout(() => handle(onFulfilled), 0);
        } else if (this._status === 'rejected') {
            // 6.5.3 如果当前状态为 rejected，则直接执行 onRejected 回调函数，并将其返回值作为下一步操作的参数
            setTimeout(() => handle(onRejected), 0);
        }
    });

    // 6.6 返回新的 Promise 对象
    return newPromise;
};

// 7. 定义 catch 方法
MyPromise.prototype.catch = function (onRejected) {
    return this.then(null, onRejected);
};

// 8. 定义 finally 方法
MyPromise.prototype.finally = function (callback) {
    return this.then(
        value => MyPromise.resolve(callback()).then(() => value),
        reason => MyPromise.reject(callback()).then(() => { throw reason; })
    );
};

// 9. 定义 resolve 方法
MyPromise.resolve = function (value) {
    if (value instanceof MyPromise) {
        return value;
    } else if (value !== null && typeof value === 'object' || typeof value === 'function') {
        try {
            const then = value.then;
            if (typeof then === 'function') {
                return new MyPromise(then.bind(value));
            }
        } catch (error) {
            return MyPromise.reject(error);
        }
    }
    return new MyPromise(resolve => resolve(value));
};

// 10. 定义 reject 方法
MyPromise.reject = function (reason) {
    return new MyPromise((resolve, reject) => reject(reason));
};

// 11. 定义 all 方法
MyPromise.all = function (promises) {
    return new MyPromise((resolve, reject) => {
        const results = new Array(promises.length);
        let count = 0;
        promises.forEach((promise, index) => {
            MyPromise.resolve(promise).then(
                value => {
                    count++;
                    results[index] = value;
                    if (count === promises.length) {
                        resolve(results);
                    }
                },
                reason => {
                    reject(reason);
                }
            );
        });
    });
};

// 12. 定义 race 方法
MyPromise.race = function (promises) {
    return new MyPromise((resolve, reject) => {
        promises.forEach(promise => {
            MyPromise.resolve(promise).then(
                value => {
                    resolve(value);
                },
                reason => {
                    reject(reason);
                }
            );
        });
    });
};
