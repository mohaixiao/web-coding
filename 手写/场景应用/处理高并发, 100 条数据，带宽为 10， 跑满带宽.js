function asyncPool(limit, dates, fn) {
    let count = 0;
    const exec = [];
    const values = [];
    const _asyncPool = () => {
        if (count === dates.length) {
            return Promise.resolve();
        }

        const item = dates[count++];
        const p = Promise.resolve().then(() => fn(item));
        values.push(p);

        const _p = p.then(() => exec.splice(exec.indexOf(_p), 1));
        exec.push(_p);

        let next = Promise.resolve();
        if (exec.length >= limit) {
            next = Promise.race(exec);
        }
        return next.then(() => _asyncPool());
    }
    return _asyncPool().then(() => Promise.all(values));
}