// bind 函数的实现步骤：
// 1. 判断调用对象是否为函数，即使我们是定义在函数的原型上的，但是可能出现使用 call 等方式调用的情况。
// 2. 保存当前函数的引用，获取其余传入参数值。
// 3. 创建一个函数返回
// 4. 函数内部使用 apply 来绑定函数调用，需要判断函数作为构造函数的情况，这个时候需要传入当前函数的 this 给 apply 调用，其余情况都传入指定的上下文对象。
// 注意： bind之后不能再次修改this的指向，bind多次后执行，函数this还是指向第一次bind的对象

Function.prototype.myCall = function (thisArg, ...args) {
    const fnName = Symbol();
    thisArg[fnName] = this;
    const res = thisArg[fnName](...args);
    delete thisArg[fnName];
    return res;
};

// 1. 在 Function.prototype 上定义 muBind 方法
Function.prototype.myBind = function (thisArg, ...args1) {
    // 判断调用对象是否为函数
    if (typeof this !== "function") {
        throw new TypeError("Error");
    }
    // 2. 保存 this, 此处的 this 指向的是调用 myBind 的那个函数
    const fn = this;
    // 3. 返回绑定函数，此函数作为普通函数被调用时，this 将显示绑定到 thisArg 上，作为普通函数调用时，会忽略 thisArg
    function BindedFn(...args2) {
        // 4. 利用 new.target 判断 BindedFn 函数是作为构造函数调用还是普通函数调用
        if (new.target === BindedFn) {
            // 5. BindedFn 函数作为构造函数调用时忽略 thisArg
            return fn(...args1, ...args2);
        };
        // 6. BindedFn 函数作为普通函数调用时，利用 myCall 方法来
        return fn.myCall(thisArg, ...args1, ...args2)
    };
    // 如果绑定的是构造函数，那么需要继承构造函数原型属性和方法：保证原函数的原型对象上的属性不丢失
    // 实现继承的方式: 使用Object.create
    BindedFn.prototype = Object.create(this.prototype);
    return BindedFn;
};
// 测试用例

function Person(name, age) {
    console.log('Person name：', name);
    console.log('Person age：', age);
    console.log('Person this：', this); // 构造函数this指向实例对象
}

// 构造函数原型的方法
Person.prototype.say = function () {
    console.log('person say');
}

// 普通函数
function normalFun(name, age) {
    console.log('普通函数 name：', name);
    console.log('普通函数 age：', age);
    console.log('普通函数 this：', this);  // 普通函数this指向绑定bind的第一个参数 也就是例子中的obj
}


var obj = {
    name: 'poetries',
    age: 18
}

// 先测试作为构造函数调用
var bindFun = Person.myBind(obj, 'poetry1') // undefined
var a = new bindFun(10) // Person name: poetry1、Person age: 10、Person this: fBound {}
a.say() // person say

// 再测试作为普通函数调用
var bindNormalFun = normalFun.myBind(obj, 'poetry2') // undefined
bindNormalFun(12) // 普通函数name: poetry2 普通函数 age: 12 普通函数 this: {name: 'poetries', age: 18}
