// https://leetcode.cn/problems/ransom-note/

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (t, s) {
    // 创建一个哈希表（数组）
    const resSet = new Array(26).fill(0);
    // 使用ASCII映射下标
    const base = 'a'.charCodeAt();
    // 将s的字母全部存储进入哈希表resSet
    for (let i of s) {
        resSet[i.charCodeAt() - base]++
    }
    // 将哈希表对应的元素递减，如果表里没有，t有多的，就直接fasle
    for (let i of t) {
        if (!resSet[i.charCodeAt() - base]) return false;
        resSet[i.charCodeAt() - base]--;
    }
    // 结束，返回true
    return true
};