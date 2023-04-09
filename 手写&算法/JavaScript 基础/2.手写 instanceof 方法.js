function instanceOf(object, constructor) {
    // 这里先用typeof来判断基础数据类型，如果是，直接返回false
    if (typeof object !== 'object' || object === null) return false;
    let curProto = Object.getPrototypeOf(object);
    // 每一层原型区检查，若相等就直接返回 true，退出
    while (curProto) {
        if (curProto === constructor.prototype) return true;
        curProto = Object.getPrototypeOf(curProto);
    }

    // 没有退出，坚持到这的就是 false 了
    return false;
}

