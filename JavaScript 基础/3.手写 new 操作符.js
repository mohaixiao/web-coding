function myNew(fn, ...arg) {
    // 判断参数是否是一个函数
    if (typeof fn !== "function") {
        console.error("type error");
        return;
    }
    // 绑定原型
    let obj = Object.create(fn.prototype);
    //绑定this 和 执行函数 
    let res = fn.call(obj, ...arg)
    // 查看返回值
    if (res && (typeof res === "object") || typeof res === "function") {
        return res;
    }
    return obj; 
}