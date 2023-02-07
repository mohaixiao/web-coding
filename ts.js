function deepCopy(object) {
    if (!object || typeof object !== "object") return;
    let newObj = Array.isArray(object) ? [] : {};
    for(let key in object) {
        if(object.hasOwnProperty(key)) {
            newObj[key] = typeof object[key] == 'object' ? deepCopy(object[key]) : object[key]; 
        }
    }
    return newObj;
}

// 使用扩展运算符可以在构造字面量对象的时候，进行属性的拷贝。语法：let cloneObj = { ...obj };
let obj1 = { a: 1, b: { c: 1 } };
let obj2 = deepCopy(obj1);
obj1.a = 2;
console.log(obj1); //{a:2,b:{c:1}}
console.log(obj2); //{a:1,b:{c:1}}
obj1.b.c = 2;
console.log(obj1); //{a:2,b:{c:2}}
console.log(obj2); //{a:1,b:{c:2}}