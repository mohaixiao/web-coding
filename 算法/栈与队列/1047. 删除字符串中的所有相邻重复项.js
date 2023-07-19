// https://leetcode.cn/problems/remove-all-adjacent-duplicates-in-string/

// 法一：使用栈
var removeDuplicates = function (s) {
    const stack = [];
    for (const x of s) {
        let c = null;
        if (stack.length && x === (c = stack.pop())) continue;
        c && stack.push(c);
        stack.push(x);
    }
    return stack.join("");
};


// 法二：双指针（模拟栈）
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


