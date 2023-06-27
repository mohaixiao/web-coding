// https://leetcode.cn/problems/zuo-xuan-zhuan-zi-fu-chuan-lcof/

/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
var reverseLeftWords = function (s, n) {
    let len = s.length;
    let i = 0;
    while (i < len - n) {
        s = s[len - 1] + s;
        i++;
    }
    return s.slice(0, len);
};