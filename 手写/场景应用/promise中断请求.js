// 根据promise a+ 规范来说
// then()接受两个参数 如果参数是不是函数将被忽略
// onFulfilled 将在promise fulfilled 后调用并接受一个参数
// onRejected 将在promise rejected 后调用 并接受一个参数
// 另外 then  一定返回的是promise
// 若两参数是函数，当函数返回的是一个新的promise对象时
//原promise 跟新promise 状态保持一致
// 如果返回的promise 是个pending 状态 将保留直到转换为fulfilled / rejected
//    
// promise中断请求  不就是在then的时候将返回值新promise保持状态为penging
// 那么这个promise 的链也将会中止（等待）

Promise.resolve().then(() => {
    // pending
    console.log(1)
    return new Promise(() => { })
    // 后面的then 将不会调用
}).then(() => {
    console.log(2)
})




// AbortController 只是一个现代浏览器提供的 Controller 对象，如果需要在旧版本浏览器上运行，则需要使用 polyfill 或类似的插件。另外，AbortController 事件监听器和 signal 信号处理还可以继续进行更多的细化和优化，以便更好地适应各种异步操作和网络请求场景。

const controller = new AbortController();

function fetchData() {
    return new Promise((resolve, reject) => {
        const signal = controller.signal;
        setTimeout(() => resolve('data'), 1000);
        signal.addEventListener('abort', () => {
            reject(new Error('Promise has been canceled'));
        });
    });
}

function cancel() {
    controller.abort();
}

const promise = fetchData();

cancel();

promise
    .then(data => console.log(data))
    .catch(error => console.error(error));

