function isEmptyObject(obj) {
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            return false;
        }
    }
    return true;
}

// 示例用法
var obj = {};
console.log(isEmptyObject(obj)); // 输出: true

obj = { name: "Alice", age: 25 };
console.log(isEmptyObject(obj)); // 输出: false
