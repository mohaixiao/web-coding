const getType = (obj) => {
    if (typeof obj == null) return String(obj);
    if (typeof obj == 'object') {
        return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
    } else {
        return typeof obj;
    }
}

// 调用
console.log(getType(null));; // -> null
console.log(getType(undefined));; // -> undefined
console.log(getType({}));// -> object
console.log(getType([])); // -> array
console.log(getType(123));// -> number
console.log(getType(true));// -> boolean
console.log(getType('123'));// -> string
console.log(getType(/123/));// -> regexp
console.log(getType(new Date()));// -> date