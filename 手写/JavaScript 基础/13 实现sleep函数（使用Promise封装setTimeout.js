function sleep(wait) {
    return new Promsie((reslove, reject) => {
        setTimeout(() => {
            reslove();
        }, wait)
    })
}