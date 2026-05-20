// https://leetcode.cn/problems/fruit-into-baskets/

/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function (fruits) {
  // 滑动窗口指针：i表示窗口左边界，j表示窗口右边界
  let i = 0;
  // n指针：记录当前窗口内同类水果的起始位置，用于更新左边界
  let n = 0;
  // 记录最大窗口长度（能收集的最大水果数量）
  let maxLen = 0;
  // 篮子数组：最多能装两种不同类型的水果
  let arr = [fruits[i]];
  
  // 右指针j从0开始遍历整个水果数组
  for (let j = 0; j < fruits.length; j++) {
    // 遇到篮子中没有的新水果类型
    if (!arr.includes(fruits[j])) {
      // 如果篮子中只有一种水果，可以继续装新水果
      if (arr.length <= 1) {
        arr[1] = fruits[j];
      } else {
        // 篮子已经有两种水果，需要调整窗口：
        // 1. 将左边界移动到n位置（当前窗口内同类水果的起始位置）
        i = n;
        // 2. 更新篮子：保留前一种水果和当前新水果
        arr[0] = fruits[j - 1];
        arr[1] = fruits[j];
      }
    }
    
    // 如果当前水果与n位置的水果类型不同，更新n指针到当前位置
    // 这有助于跟踪窗口内水果类型的变化点
    if (fruits[n] !== fruits[j]) {
      n = j;
    }
    
    // 更新最大窗口长度：当前窗口大小 j-i+1 与历史最大值比较
    maxLen = Math.max(maxLen, j - i + 1);
  }
  
  return maxLen;
};
