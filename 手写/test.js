Promise._all = function (promises) {

    if (!(typeof promises === "object" && promises !== null && typeof promises[Symbol.iterator] === "function")) {
        throw new TypeError(`${promises} is not iterable`)
    }

    
    return new Promise((resolve, reject) => {
        let count = 0;
        let result = [];
        promises = [...promises]
        const len = promises.length;

        if (len == 0) {
            resolve(result);
        }

        for (let i = 0; i < len; i++) {
            Promise.resolve(promises[i])
                .then(
                    res => {
                        result[i] = res;
                        if (len == ++count) {
                            resolve(result);
                        }
                    }
                )
                .catch(e => {
                    reject(e);
                })
        }
    })
}