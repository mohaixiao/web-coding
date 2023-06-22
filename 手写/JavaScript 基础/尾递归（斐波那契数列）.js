function fibonacci(n) {
    if (n <= 2) {
        return n;
    }

    return fibonacci(n - 1) + fibonacci(n - 2);
}


function feibo3(n) {
    let pre = 1;
    let cur = 1;
    for (let i = 2; i <= n; i++) {
        [pre, cur] = [cur, cur + pre];
    }
    return cur;
}