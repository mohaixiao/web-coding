// 实现SetInterval效果
// 使用 setTimeout 实现 setInterval 有一些缺点，比如无法准确控制任务间隔的时间、无法保证每个任务的执行顺序等

function _timerSetInterval(fn, delay, ...args) {
    let current = Date.now();
    let timer = null;

    const task = () => {
        current += delay;
        timer = setTimeout(() => {
            fn.apply(this, args);
            task();
        }, current - Date.now());
    };

    task();
    return () => clearTimeout(timer);
}

// setTimeout实现补偿时间效果

function mySetTimeout(callback, delay) {
    const start = Date.now();

    function tick() {
        const elapsed = Date.now() - start;
        if (elapsed >= delay) {
            callback();
        } else {
            setTimeout(tick, delay - elapsed);
        }
    }

    setTimeout(tick, delay);
}

// 在这个实现中，我们使用了 Date.now() 函数来获取当前的时间戳，并通过计算已经过去的时间来判断是否已经达到了指定的延迟时间。如果已经达到了延迟时间，就立即执行回调函数。否则，我们会使用内部的 setTimeout 函数以“剩余延迟”作为参数来设置下一个定时器。

// “剩余延迟”在这里指的就是还需要等待多少毫秒才能开始执行回调函数。由于浏览器可能存在一些系统性能上的抖动，我们需要使用延迟时间减去已经过去的时间，就可以得到“剩余延迟”的时间。

// 通过这种方式，我们可以在 setTimeout 中加入系统补偿时间的考虑，从而提高定时器的精确度。