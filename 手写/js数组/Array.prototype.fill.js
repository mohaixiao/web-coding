Array.prototype.myFill = function (initValue, start = 0, end) {
    end = end < 0 ? this.length + end : end;
    for (let i = start; i < end; i++) {
        this[i] = initValue;
    }
    return this;
};
let arr = [3, 3, 21, 3, 14, 12, 4, 1, 2];
console.log(arr.fill(1, 3, 5));


Array.prototype.fill = function (value, start, end) {
    var len = this.length;
    start = start || 0;
    end = end || len;
    start = (start >= 0) ? start : Math.max(len + start, 0);
    end = (end >= 0) ? Math.min(end, len) : len + end;
    for (var i = start; i < end; i++) {
        this[i] = value;
    }
    return this;
}

let arr = [1, 2, 3, 4, 5, 7];
console.log(arr.fill(99, 1, 5));