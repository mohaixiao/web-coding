// https://leetcode.cn/problems/da-yin-cong-1dao-zui-da-de-nwei-shu-lcof/solutions/1634694/dai-ma-jian-ji-yi-chong-huan-bu-cuo-de-j-4xsc/

var printNumbers = function (n) {
  let nums = new Array(Math.pow(10, n) - 1);
  let newNums = nums.fill(0).map((value, index, arr) => {
    value = index + 1;
    return value;
  });
  return newNums;
};

/**
 * 前缀和
 * Accepted
 * 5/5 cases passed (80 ms)
 * Your runtime beats 89.39 % of javascript submissions
 * Your memory usage beats 80.85 % of javascript submissions (49.1 MB)
 * 耗时 0:5:35
 */
var printNumbers = function (n) {
  const len = Math.pow(10, n) - 1;
  let dp = new Array(len).fill(1);
  for (let i = 1; i < len; i++) dp[i] += dp[i - 1];
  return dp;
};

/**
 * 大数操作
 * Accepted
 * 5/5 cases passed (92 ms)
 * Your runtime beats 52.2 % of javascript submissions
 * Your memory usage beats 14.5 % of javascript submissions (52.6 MB)
 */
var printNumbers = function (n) {
  const len = Math.pow(10, n) - 1;
  var dfs = function (num, i) {
    if (num.length === i) return res.push(Number(num)); //这里的Number(num)是为了通过本题，若支持大数肯定涉及返回字符串数组
    for (let k = 0; k <= 9; k++) {
      dfs(num + k, i); //枚举下一位
    }
  };
  let res = [];
  for (let i = 1; i <= n; i++) {
    //几位数
    for (let j = 1; j <= 9; j++) {
      //首位只能时1到9
      let num = j + "";
      dfs(num, i);
    }
  }
  return res;
};
