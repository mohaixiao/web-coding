// https://leetcode.cn/problems/valid-parentheses/description/?envType=problem-list-v2&envId=LTRv2Gcc

/**
 * 方法一：使用栈存储对应的右括号
 * @param {string} s - 包含括号的字符串
 * @return {boolean} - 返回括号是否有效
 */
var isValid = function (s) {
  // 创建一个数组作为栈，用于存储期望的右括号
  const arr = [];
  // 遍历字符串中的每个字符
  for (let i of s) {
    // 使用switch语句判断当前字符
    switch (i) {
      // 如果是左大括号，将对应的右大括号压入栈
      case "{":
        arr.push("}");
        break;
      // 如果是左方括号，将对应的右方括号压入栈
      case "[":
        arr.push("]");
        break;
      // 如果是左圆括号，将对应的右圆括号压入栈
      case "(":
        arr.push(")");
        break;
      // 如果是右括号（或其他字符）
      default:
        // 弹出栈顶元素，如果栈为空或弹出的元素与当前字符不匹配，返回false
        if (arr.pop() !== i) {
          return false;
        }
    }
  }
  // 如果栈为空，说明所有括号都匹配成功，返回true
  return arr.length == 0;
};

/**
 * 方法二：使用Map映射和栈
 * @param {string} s - 包含括号的字符串
 * @return {boolean} - 返回括号是否有效
 */
var isValid = function (s) {
  // 创建一个数组作为栈，用于存储左括号
  const stack = [];
  // 创建一个Map，将右括号映射到对应的左括号
  const map = {
    "}": "{",
    ")": "(",
    "]": "[",
  };

  // 遍历字符串中的每个字符
  for (let i = 0; i < s.length; i++) {
    // 获取当前字符
    const current = s[i];
    // 如果当前字符是右括号（在map中存在）
    if (map[current]) {
      // 如果栈不为空，弹出栈顶元素；如果栈为空，使用"#"作为占位符
      const top = stack.length ? stack.pop() : "#";
      // 如果弹出的左括号与当前右括号不匹配，返回false
      if (top !== map[current]) return false;
    } else {
      // 如果当前字符是左括号，将其压入栈
      stack.push(current);
    }
  }
  // 如果栈为空，说明所有括号都匹配成功，返回true
  return stack.length === 0;
};
