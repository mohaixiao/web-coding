function timeout(delay) {
    return new Promise(resolve => {
        setTimeout(resolve, delay)
    })
};

function sleep(wait) {
    return new Promsie((reslove, reject) => {
        setTimeout(() => {
            reslove();
        }, wait)
    })
}