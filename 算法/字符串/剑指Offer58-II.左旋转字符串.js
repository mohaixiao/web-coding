// https://leetcode.cn/problems/zuo-xuan-zhuan-zi-fu-chuan-lcof/

/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
var reverseLeftWords = function (s, n) {
    let s1 = s.slice(0, n);
    let s2 = s.slice(n);
    return s2 + s1;
};

/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
var reverseLeftWords = function (s, n) {
    const arr = Array.from(s);
    reverse(arr, 0, n - 1);
    reverse(arr, n, arr.length - 1);
    reverse(arr, 0, arr.length - 1)
    return arr.join('')
};


// 翻转从 start 到 end 的字符
function reverse(strArr, start, end) {
    let left = start;
    let right = end;

    while (left < right) {
        // 交换
        [strArr[left], strArr[right]] = [strArr[right], strArr[left]];
        left++;
        right--;
    }
}

/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
var reverseLeftWords = function (s, n) {
    const length = s.length;
    let i = 0;
    while (i < length - n) {
        s = s[length - 1] + s
        i++
    }
    return s.slice(0, length);
};