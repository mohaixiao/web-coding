
Promise.prototype.catch = function (promises) {
    return this.then(null, promises);
}