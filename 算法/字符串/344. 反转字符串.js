// https://leetcode.cn/problems/reverse-string/

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
    let i = 0;
    let j = s.length - 1;

    while (j >= i) {
        [s[i], s[j]] = [s[j], s[i]];
        j--;
        i++;
    }
};