// https://leetcode.cn/problems/remove-all-adjacent-duplicates-in-string/

// https://code-thinking.cdn.bcebos.com/gifs/1047.%E5%88%A0%E9%99%A4%E5%AD%97%E7%AC%A6%E4%B8%B2%E4%B8%AD%E7%9A%84%E6%89%80%E6%9C%89%E7%9B%B8%E9%82%BB%E9%87%8D%E5%A4%8D%E9%A1%B9.gif


// 法一：使用栈

/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
    const stack = [];
    for (const x of s) {
        let c = null;
        // 
        if (stack.length && x === (c = stack.pop())) continue;
        c && stack.push(c);
        stack.push(x);
    }
    return stack.join("");
};


/**
 * @param {string} s
 * @return {string}
 */
// 原地解法（双指针模拟栈）
var removeDuplicates = function (s) {
    s = [...s];
    let top = -1; // 指向栈顶元素的下标
    for (let i = 0; i < s.length; i++) {
        if (top === -1 || s[top] !== s[i]) { // top === -1 即空栈
            s[++top] = s[i]; // 入栈
        } else {
            top--; // 推出栈
        }
    }
    s.length = top + 1; // 栈顶元素下标 + 1 为栈的长度
    return s.join('');
};