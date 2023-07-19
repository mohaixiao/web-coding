// https://leetcode.cn/problems/valid-parentheses/

var isValid = function (s) {
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        let c = s[i];
        switch (c) {
            case '(':
                stack.push(')');
                break;
            case '[':
                stack.push(']');
                break;
            case '{':
                stack.push('}');
                break;
            default:
                if (c !== stack.pop()) {
                    return false;
                }
        }
    }
    return stack.length === 0;
};


// 简化版本
var isValid = function (s) {
    const stack = [],
        map = {
            "(": ")",
            "{": "}",
            "[": "]"
        };
    for (const x of s) {
        if (x in map) {
            stack.push(x);
            continue;
        };
        if (map[stack.pop()] !== x) return false;
    }
    return !stack.length;
};


