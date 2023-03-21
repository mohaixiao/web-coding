// https://leetcode.cn/problems/reverse-string-ii/

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
    // 长度
    const len = s.length;
    // 转换为数组
    let resArr = s.split("");
    // 以2k长度进行遍历
    for (let i = 0; i < len; i += 2 * k) {
        let l = i - 1,
            // 查看剩余长度与k，2k的大小
            r = i + k > len ? len : i + k;
        // 遍历交换(第一次就是++l，--r l,r初始值是翻转字符串的首尾多移动一位)
        while (++l < --r) {
            [resArr[l], resArr[r]] = [resArr[r], resArr[l]];
        }
    }
    return resArr.join("");
};