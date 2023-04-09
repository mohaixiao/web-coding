// https://leetcode.cn/problems/zui-chang-bu-han-zhong-fu-zi-fu-de-zi-zi-fu-chuan-lcof/description/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    if (s == ' ') return 1;
    s = s.split('');
    let left = 0;
    let right = 0;
    let maxLength = 0;
    if (s.length === 0) return 0;
    if (s.length === 1) return 1;
    while (right < s.length - 1) {
        right++;
        for (let i = left; i < right; i++) {
            if (s[right] === s[i]) {
                left = i + 1;
            }
        }
        maxLength = maxLength < right - left + 1 ? right - left + 1 : maxLength;
    }
    return maxLength;
};