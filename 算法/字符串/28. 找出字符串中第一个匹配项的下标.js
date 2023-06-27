// https://leetcode.cn/problems/find-the-index-of-the-first-occurrence-in-a-string/

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    // 计算字符串的长度
    const m = haystack.length;
    const n = needle.length;
    // 循环遍历匹配
    for (let i = 0; i + n <= m; i++) {
        let flag = true;
        for (let j = 0; j < n; j++) {
            if (haystack[i + j] !== needle[j]) {
                flag = false
                break;
            }
        }
        if (flag) {
            return i;
        }
    }
    // 没有匹配到
    return -1;
};