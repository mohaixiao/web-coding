// https://leetcode.cn/problems/happy-number/

var isHappy = function (n) {
    // 创建一个存储sum 的Map()
    let m = new Map()
    // 将最后一位进行平方累加
    const getSum = (n) => {
        let sum = 0
        while (n) {
            sum += (n % 10) ** 2
            n = Math.floor(n / 10)
        }
        return sum
    }
    // 判断 n 最后是否变为1
    while (true) {
        // n出现过，证明已陷入无限循环
        if (m.has(n)) return false
        if (n === 1) return true
        m.set(n, 1)
        n = getSum(n)
    }
}

// 方法二：使用环形链表的思想 说明出现闭环 退出循环
var isHappy = function (n) {
    // 将最后一位进行平方累加
    const getN = (n) => {
        let sum = 0
        while (n) {
            sum += (n % 10) ** 2
            n = Math.floor(n / 10)
        }
        return sum
    }
    // 判断n求值之后是否为1
    if (getN(n) == 1) return true;
    // 求值顺序 n -> a -> b 
    let a = getN(n), b = getN(getN(n));
    // 如果 a === b 
    while (b !== 1 && getN(b) !== 1 && a !== b) {
        // 依次向前进一位
        // a -> b
        a = getN(a);
        // b - > getN(b)
        b = getN(getN(b));
    }
    return b === 1 || getN(b) === 1;
};

// 方法三：使用Set()更简洁
/**
 * @param {number} n
 * @return {boolean}
 */

var getSum = function (n) {
    let sum = 0;
    while (n) {
        sum += (n % 10) ** 2;
        n = Math.floor(n / 10);
    }
    return sum;
}
var isHappy = function (n) {
    let set = new Set();   // Set() 里的数是惟一的
    // 如果在循环中某个值重复出现，说明此时陷入死循环，也就说明这个值不是快乐数
    while (n !== 1 && !set.has(n)) {
        set.add(n);
        n = getSum(n);
    }
    return n === 1;
};

// 方法四：使用Set()，求和用reduce
var isHappy = function (n) {
    let set = new Set();
    let totalCount;
    while (totalCount !== 1) {
        let arr = ('' + (totalCount || n)).split(''); // 转换为字符串在转换为数组
        // 使用reduce累加求sum
        totalCount = arr.reduce((total, num) => {
            return total + num * num
        }, 0)

        if (set.has(totalCount)) {
            return false;
        }
        set.add(totalCount);
    }
    return true;
};