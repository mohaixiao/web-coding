// https://leetcode.cn/problems/compare-version-numbers/description/

/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
    let v1 = version1.split('.');
    let v2 = version2.split('.');
    for (let i = 0; i < v1.length || i < v2.length; i++) {
        let x = 0;
        let y = 0;
        if (i < v1.length) {
            x = parseInt(v1[i]);
        }
        if (i < v2.length) {
            y = parseInt(v2[i]);
        }
        if (x > y) return 1;
        if (x < y) return -1;
    }
    return 0
};

// 双指针

var compareVersion = function (version1, version2) {
    const n = version1.length, m = version2.length;
    let i = 0, j = 0;
    while (i < n || j < m) {
        let x = 0;
        for (; i < n && version1[i] !== '.'; ++i) {
            x = x * 10 + version1[i].charCodeAt() - '0'.charCodeAt();
            // 使用 charCodeAt() 方法将 version1 和 version2 中的数字字符转换为对应的数字
        }
        ++i; // 跳过点号
        let y = 0;
        for (; j < m && version2.charAt(j) !== '.'; ++j) {
            y = y * 10 + version2[j].charCodeAt() - '0'.charCodeAt();
        }
        ++j; // 跳过点号
        if (x !== y) {
            return x > y ? 1 : -1;
        }
    }
    return 0;
};
