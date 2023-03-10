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

// 前缀表统一减一
/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
    if (s.length === 0)
        return false;

    const getNext = (s) => {
        let next = [];
        let j = -1;

        next.push(j);

        for (let i = 1; i < s.length; ++i) {
            while (j >= 0 && s[i] !== s[j + 1])
                j = next[j];
            if (s[i] === s[j + 1])
                j++;
            next.push(j);
        }

        return next;
    }

    let next = getNext(s);

    if (next[next.length - 1] !== -1 && s.length % (s.length - (next[next.length - 1] + 1)) === 0)
        return true;
    return false;
};

// 前缀表统一不减一
/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
    if (s.length === 0)
        return false;

    const getNext = (s) => {
        let next = [];
        let j = 0;

        next.push(j);

        for (let i = 1; i < s.length; ++i) {
            while (j > 0 && s[i] !== s[j])
                j = next[j - 1];
            if (s[i] === s[j])
                j++;
            next.push(j);
        }

        return next;
    }

    let next = getNext(s);

    if (next[next.length - 1] !== 0 && s.length % (s.length - next[next.length - 1]) === 0)
        return true;
    return false;
};