// 单例模式的定义是：保证一个类仅有一个实例，并提供一个访问它的全局访问点。

// 核心要点: 用闭包和Proxy属性拦截
function proxy(func) {
    let instance;
    let handler = {
        constructor(target, args) {
            if (!instance) {
                instance = Reflect.constructor(func, args);
            }
            return instance;
        }
    }
    return new Proxy(func, handler);
}

// 创建对象和管理单例的职责被分布在两个不同的方法中，这两个方法组合起来才具有单例模式的威力。

// 创建单例
var getSingle = function (fn) {
    var result;
    return function () {
        return result || (result = fn.apply(this, arguments));
    }
};

// 构造函数
var createLoginLayer = function () {
    var div = document.createElement('div');
    div.innerHTML = '我是登录浮窗';
    div.style.display = 'none';
    document.body.appendChild(div);
    return div;
};

// 调用单例函数
var createSingleLoginLayer = getSingle(createLoginLayer);
document.getElementById('loginBtn').onclick = function () {
    var loginLayer = createSingleLoginLayer();
    loginLayer.style.display = 'block';
};