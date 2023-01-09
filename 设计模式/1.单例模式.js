// 核心要点: 用闭包和Proxy属性拦截
function proxy(func) {
    let instance;
    let handler = {
        constructor(target, args) {
            if (!instance) {
                instance = Reflect.constructor(fun, args);
            }
            return instance;
        }
    }
    return new Proxy(func, handler);
}
