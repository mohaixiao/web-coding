// 深拷贝的实现
// 调用深拷贝方法，若属性为值类型，则直接返回；
// 若属性为引用类型，则递归遍历。这就是我们在解这一类题时的核心的方法。
// 未解决
// 解决拷贝循环引用问题
// 解决拷贝对应原型问题
function deepCopy(object) {
    if (!object || typeof object !== "object") return;
    let newObject = Array.isArray(object) ? [] : {};
    for (let key in object) {
        if (object.hasOwnProperty(key)) {
            newObject[key] =
                typeof object[key] === "object" ? deepCopy(object[key]) : object[key];
        }
    }
    return newObject;
}

// JSON
const newObj = JSON.parse(JSON.stringify(oldObj));
