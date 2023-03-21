// https://leetcode.cn/problems/valid-parenthesis-string/

var checkValidString = function (s) {
    // 创建“("栈。“*”栈
    const leftStack = [];
    const asteriskStack = [];
    const n = s.length;
    //遍历 是(.* 就存储，不是就 删（->* -> false
    for (let i = 0; i < n; i++) {
        const c = s[i];
        if (c === '(') {
            leftStack.push(i);
        } else if (c === '*') {
            asteriskStack.push(i);
        } else {
            if (leftStack.length) {
                leftStack.pop();
            } else if (asteriskStack.length) {
                asteriskStack.pop();
            } else {
                return false;
            }
        }
    }
    // 挨个清理（ * 
    while (leftStack.length && asteriskStack.length) {
        // 去除栈顶下标
        const leftIndex = leftStack.pop();
        const asteriskIndex = asteriskStack.pop();
        // 如果（下标比*大就报错
        if (leftIndex > asteriskIndex) {
            return false;
        }
    }
    // 返回最后结果
    return leftStack.length === 0;
};