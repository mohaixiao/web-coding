// Promise.reject 中传入的参数会作为一个 reason 原封不动地往下传, 实现如下:

Promise.myReject = function (reason) {
    return new Promise((resolve, reject) => {
        reject(reason);
    });
}