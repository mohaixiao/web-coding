// https://leetcode.cn/problems/fruit-into-baskets/

/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function (fruits) {
  let i = 0;
  let n = 0; // 记录一类水果最开始的位置并且更新给i
  let maxLen = 0;
  let arr = [fruits[i]];
  for (let j = 0; j < fruits.length; j++) {
    // 遇到篮子中没有的新水果
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
    if (fruits[n] !== fruits[j]) {
      n = j;
    }
    maxLen = Math.max(maxLen, j - i + 1);
  }
  return maxLen;
};
