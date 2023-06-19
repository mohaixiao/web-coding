let t = setTimeout(() => {
    console.log(111);
    let t1 = setTimeout(() => {
        console.log(222);
        let t2 = setTimeout(() => {
            console.log(333);
        }, 3000);
    }, 2000);
}, 1000);

// todo

// 方式一：promise写法

function myPromise(time, context) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(context);
            resolve()
        }, time);
    })
}


// promise写法
myPromise(1000, 111)
    .then(() => {
        return myPromise(2000, 222);
    })
    .then(() => {
        return myPromise(3000, 333);
    })

// 方式二：

function myPromise(time, context) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(context);
            resolve()
        }, time);
    })
}

// async await写法
async function fun() {
    await myPromise(1000, 111);
    await myPromise(2000, 222);
    await myPromise(3000, 333);
}
fun();