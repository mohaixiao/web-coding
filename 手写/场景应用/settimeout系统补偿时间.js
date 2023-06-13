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

