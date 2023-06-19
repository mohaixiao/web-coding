function mySetInterVal(fn, a, b) {
    let clear = false;
    const intervalFn = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                fn();
                if (clear) resolve(new Promise(() => { }));
                else {
                    resolve(intervalFn());
                }
            }, b);
        });
    };
    setTimeout(intervalFn, a);
    return () => {
        clear = true;
    };
}

function myClear() {
    clearTimeout(timerId);
}

const stoop = mySetInterVal(
    () => {
        console.log(Date.now());
    },
    1000,
    2000
);

setTimeout(() => {
    stoop();
}, 2000);
