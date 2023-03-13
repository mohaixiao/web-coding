// https://leetcode.cn/problems/fruit-into-baskets/

// 思想：i，j == 0，j和数组长度循环，使用n记录第一类水果最开始的位置并且更新给i，遇到新水果，篮子有空的直接装，没有就更新篮子换一下装（记得更新i的值为n），新遇到的水果和n代表的篮子的水果比较,不一样就更新n为j，代表的第一个篮子的水果。，更新max长度。

/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function (fruits) {
    let i = 0;
    let n = 0; // 记录第一类水果最开始的位置并且更新给i
    let maxLen = 0;
    let arr = [fruits[i]];
    for (let j = 0; j < fruits.length; j++) {
        if (!arr.includes(fruits[j])) {
            // 换个篮子继续装
            if (arr.length <= 1) {
                arr[1] = fruits[j];
            } else {
                // 2个篮子换果子
                i = n;
                arr[0] = fruits[j - 1];
                arr[1] = fruits[j];
            }
        }
        // 新遇到的水果和最开始篮子的水果比较,不一样就更新第一个篮子的水果
        if (fruits[n] !== fruits[j]) {
            n = j;
        }
        // 更新篮子存储树木的长度
        maxLen = Math.max(maxLen, j - i + 1);
    }
    return maxLen;
};

