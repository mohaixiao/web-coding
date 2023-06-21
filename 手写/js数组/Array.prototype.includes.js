Array.prototype.myIncludes = function (value, start = 0) {
    start = start < 0 ? this.length + start : start;
    for (let i = start; i < this.length; i++) {
        if (this[i] == value || (Number.isNaN(value) && Number.isNaN(this[i])))
            return true;
    }
    return false;
};

let arr = [1, 2, 3, 4, 5, 7];
console.log(arr.myIncludes(99, 1, 5));