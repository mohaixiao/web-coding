// https://leetcode.cn/problems/evaluate-reverse-polish-notation/

// https://code-thinking.cdn.bcebos.com/gifs/150.%E9%80%86%E6%B3%A2%E5%85%B0%E8%A1%A8%E8%BE%BE%E5%BC%8F%E6%B1%82%E5%80%BC.gif

/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    // 符号操作
    const s = new Map([
        ["+", (a, b) => a * 1 + b * 1],
        ["-", (a, b) => b - a],
        ["*", (a, b) => b * a],
        ["/", (a, b) => (b / a) | 0]
    ]);
    // 创建栈
    const stack = [];
    for (const i of tokens) {
        // 遍历不是符号
        if (!s.has(i)) {
            stack.push(i);
            continue;
        }
        // 是就调用对应操作,计算了在推入
        stack.push(s.get(i)(stack.pop(), stack.pop()))
    }
    // 返回计算结果值
    return stack.pop();
};