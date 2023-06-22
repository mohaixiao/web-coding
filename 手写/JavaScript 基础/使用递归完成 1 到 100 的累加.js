function process(cur, total = 0) {
    return cur === 0 ? total : process(cur - 1, total + cur);
}


// 直接就是一个循环
const sum = (min, max) => {
    let total = 0

    while (min <= max) {
        total += min
        min += 1
    }
    return total
}

// 递归:  相当于 min + (min + 1) + (min + 1 + 1)……
const sum1 = (min, max) => {
    if (min === max) return min
    return min + sum1(min + 1, max)
}