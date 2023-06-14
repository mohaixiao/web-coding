// 使用闭包实现
for (var i = 0; i < 5; i++) {
    (function (i) {
        setTimeout(function () {
            console.log(i);
        }, i * 1000);
    })(i);
}
// 使用 let 块级作用域
for (let i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log(i);
    }, i * 1000);
}


function delayLog(str) {
    return new Promise((resolve, _) => {
        setTimeout(() => {
            console.log(str);
            resolve()
        }, 1000);
    })
}
async function time() {
    for (let i = 1; i <= 5; i++) {
        await delayLog(i)
    }
}
time();