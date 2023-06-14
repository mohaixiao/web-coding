function control(stack, max, cb) {
    let data = [];
    let len = stack.length;
    if (!max) {
        max = len;
    }
    function loop() {
        if (!stack.length) return cb(data) ;
        if (stack.length < max) max = stack.length;
        new Promise((resolve, reject) => {
            setTimeout(() => {
                let data = []
                for (let i = 0; i < max; i++) {
                    const element = stack[i];
                    data.push(element(i));
                }
                resolve(data);
            }, 1000)
        }).then(res => {
            data.push(...res);
            stack = stack.slice(max);
            loop()
        })
    }
    loop()
}

let stack = [
    res => 1,
    res => 2,
    res => 3,
    res => 4,
    res => 5
]

control(stack, 3, res => {
    console.log(res);
})