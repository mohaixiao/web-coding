function mySetTimeout(fn, delay, ...args) {
    const timer = setInterval(() => {
        fn.apply(this, args);
        clearInterval(timer);
    }, delay)
}

// 测试
mySetTimeout(() => {
    console.log(1);
}, 1000)
