let runningTask = 0;
async function callAsyncFunction(promiseFn) {
    if (runningTask === 0) {
        console.log("Calling async function...");
        runningTask++;
        // 将 promiseFn 包装成一个新的 Promise，以便可以在其执行完毕后进行下一步操作
        // 返回当前的 promise，以便可以在外部处理其结果
        return new Promise(async (resolve, reject) => {
            try {
                // await不会捕获错误，所以用try...catch
                const result = await promiseFn();
                resolve(result);
                runningTask--;
            } catch (err) {
                reject(err);
                runningTask--;
            }
        });
    } else {
        return null;
    }
}



let isRequesting = false

function myRequest(url) {
    if (isRequesting) {
        return Promise.reject('请求中')
    }

    isRequesting = true
    return fetch(url)
        .then((res) => {
            isRequesting = false
            return res.json()
        })
        .catch((err) => {
            isRequesting = false
            throw err
        })
}

myRequest('https://jsonplaceholder.typicode.com/todos/1')
    .then((res) => {
        console.log(res)
    })
    .catch((err) => {
        console.log(err)
    })

myRequest('https://jsonplaceholder.typicode.com/todos/5')
    .then((res) => {
        console.log(res)
    })
    .catch((err) => {
        console.log(err)
    })

myRequest('https://jsonplaceholder.typicode.com/todos/4')
    .then((res) => {
        console.log(res)
    })
    .catch((err) => {
        console.log(err)
    })

myRequest('https://jsonplaceholder.typicode.com/todos/3')
    .then((res) => {
        console.log(res)
    })
    .catch((err) => {
        console.log(err)
    })

myRequest('https://jsonplaceholder.typicode.com/todos/2')
    .then((res) => {
        console.log(res)
    })
    .catch((err) => {
        console.log(err)
    })



function promiseWrapper(fetchApi) {
    let oldReqPromise = Promise.resolve();
    const doRequest = () => {
        const newReqPromise = oldReqPromise.then(() => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve("data");
                }, 1000);
            });
        });
        oldReqPromise = newReqPromise;
        return newReqPromise;
    };
    return doRequest;
}

// 测试用例
const request = promiseWrapper();

request().then(() => {
    console.log("第一次请求完成");
});

request().then(() => {
    console.log("第二次请求完成");
});

setTimeout(() => {
    request().then(() => {
        console.log("第三次请求完成");
    });
}, 1500);