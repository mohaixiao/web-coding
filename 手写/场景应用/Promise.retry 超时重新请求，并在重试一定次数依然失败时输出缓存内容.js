/**
 * 超时重新请求，并在重试一定次数依然失败时输出缓存内容
 * @param {*} promiseFactory 一个返回 Promise 的函数，表示要执行的异步操作。
 * @param {*} maxRetries 一个整数，表示最大的重试次数。
 * @param {*} timeout 一个整数，表示每次重试的间隔时间（单位为毫秒）。
 * @param {*} cache 一个可选的参数，表示缓存的内容，如果重试多次依然失败，则会返回该缓存内容。
 * @returns promise
 */
function retry(promiseFactory, maxRetries, timeout, cache = null) {
    return new Promise((resolve, reject) => {
        let retries = 0;
        const executePromise = () => {
            promiseFactory()
                .then(resolve)
                .catch((error) => {
                    retries++;
                    if (retries >= maxRetries) {
                        // 使用缓存
                        if (cache) {
                            resolve(cache);
                        } else {
                            // 报错
                            reject(error);
                        }
                    } else {
                        // 从新试
                        setTimeout(executePromise, timeout);
                    }
                });
        };
        executePromise();
    });
}


// ----------test----------
!(() => {
    const fetchData = () => {
        // 返回一个 Promise 对象，表示异步请求数据
        return fetch('http://example.com/data')
            .then((response) => response.json())
            .then((data) => {
                // 处理数据
                return data;
            });
    };

    retry(fetchData, 3, 10000, '缓存内容')
        .then((data) => {
            // 成功获取数据
            console.log(data);
        })
        .catch((error) => {
            // 请求失败或超时，并且重试多次依然失败
            console.error(error);
        });
})()