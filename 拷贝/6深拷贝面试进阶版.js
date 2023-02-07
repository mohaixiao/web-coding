// 解决拷贝循环引用问题
// 解决拷贝对应原型问题

// 递归拷贝 (类型判断)
function deepClone(value, hash = new WeakMap) { // 弱引用，不用map，weakMap更合适一点
    // null 和 undefiend 是不需要拷贝的
    if (value == null) { return value; }
    if (value instanceof RegExp) { return new RegExp(value) }
    if (value instanceof Date) { return new Date(value) }
    // 函数是不需要拷贝
    if (typeof value != 'object') return value;
    let obj = new value.constructor(); // [] {}
    // let newObj = Array.isArray(object) ? [] : {};
    // 说明是一个对象类型
    if (hash.get(value)) {
        return hash.get(value)
    }
    hash.set(value, obj);
    for (let key in value) { // in 会遍历当前对象上的属性 和 __proto__指代的属性
        // 补拷贝 对象的__proto__上的属性
        if (value.hasOwnProperty(key)) {
            // 如果值还有可能是对象 就继续拷贝
            obj[key] = deepClone(value[key], hash);
        }
    }
    return obj
    // 区分对象和数组 Object.prototype.toString.call
}


var o = {};
o.x = o;
var o1 = deepClone(o); // 如果这个对象拷贝过了 就返回那个拷贝的结果就可以了
console.log(o1);