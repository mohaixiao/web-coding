// 时间戳方式：
// func是用户传入需要防抖的函数
// wait是等待时间
const throttle = (func, wait = 50) => {
    // 上一次执行该函数的时间
    let lastTime = Date.now()
    return function (...args) {
        // 当前时间
        let now = Date.now()
        // 将当前时间和上一次执行函数时间对比
        // 如果差值大于设置的等待时间就执行函数
        if (now - lastTime > wait) {
            lastTime = Date.now();
            func.apply(this, args)
        }
    }
}

setInterval(
    throttle(() => {
        console.log(1)
    }, 500),
    1
)

// 定时器方式：
function throttle(func, delay) {
    var timer = null;
    return function (...args) {
        if (!timer) {
            timer = setTimeout(function () {
                func.apply(this, args);
                timer = null;
            }, delay);
        }
    }
}

setInterval(
    throttle(() => {
        console.log(1)
    }, 5000),
    1
)