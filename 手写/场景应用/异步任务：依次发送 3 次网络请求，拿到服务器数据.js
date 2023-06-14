function data1() {
    return new Promise((res) => {
        setTimeout(() => {
            res("获取到第一条数据");
        }, 3000);
    });
}
function data2(data = "") {
    return new Promise((res) => {
        console.log(data);
        setTimeout(() => {
            res("获取到第二条数据");
        }, 5000);
    });
}
function data3(data = "") {
    return new Promise((res) => {
        console.log(data);
        setTimeout(() => {
            res("获取到第三条数据");
        }, 1000);
    });
}
function data4(data = "") {
    return new Promise((res, rej) => {
        console.log(data);
        rej(new Error("失败"));
    });
}
//   下一个接口需要上一个接口的数据 依次执行
data1()
    .then((res) => {
        return data2(res);
    })
    .then((res) => {
        return data3(res);
    })
    .then((res) => {
        return data4(res);
    })
    .catch((err) => {
        console.log(err);
    });
// 执行所有的异步任务 同时请求 成功
const promises = [data1(), data2(), data3()];
Promise.all(promises)
    .then((res) => {
        console.log("所有异步任务已成功加载");
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    });
//  执行所有的异步任务 同时请求  失败
Promise.all([...promises, data4()])
    .then((res) => {
        console.log("所有异步任务已成功加载");
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    });


// 假设我们有3个请求，分别耗时一秒，在执行其他操作之前必须拿到三个结果，可以这么实现

const p1 = () => new Promise((resolve) => setTimeout(() => {
    resolve("p1");
}, 1000))
const p2 = () => new Promise((resolve) => setTimeout(() => {
    resolve("p2");
}, 1000))
const p3 = () => new Promise((resolve) => setTimeout(() => {
    resolve("p3");
}, 1000))


const fn = async () => {
    const r1 = p1()
    const r2 = p2()
    const r3 = p3()

    const res1 = await r1
    const res2 = await r2
    const res3 = await r3

    console.log(res1, res2, res3)
}



function fetchData() {
    return fetch('http://api.example.com/data1')
        .then(response => response.json())
        .then(data1 => {
            console.log(data1);
            return fetch('http://api.example.com/data2');
        })
        .then(response => response.json())
        .then(data2 => {
            console.log(data2);
            return fetch('http://api.example.com/data3');
        })
        .then(response => response.json())
        .then(data3 => {
            console.log(data3);
        })
        .catch(error => {
            console.error(error);
        });
}

fetchData();



function post(time) {
    return new Promise((reslove, reject) => {
        setTimeout(() => {
            console.log(time);
            reslove()
        }, time)
    })
}

// (async function () {
//     let start = new Date();
//     await post(1000)
//     await post(2000)
//     await post(3000)
//     console.log(new Date() - start);  // 6s
// })()

let start = new Date();
post(1000).then(() => post(2000)).then(() => post(3000)).then(() => console.log(new Date() - start))
 // 6s