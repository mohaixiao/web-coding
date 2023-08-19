// https://leetcode.cn/problems/qing-wa-tiao-tai-jie-wen-ti-lcof/?envType=featured-list&envId=xb9nqhhg

/**
 * @param {number} n
 * @return {number}
 */
var numWays = function (n) {
  let dp = [1, 1];
  for (let i = 2; i <= n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % (1e9 + 7);
  }
  return dp[n];
};

/**
 * @param {number} n
 * @return {number}
 */
var numWays = function (n) {
  let a = 1;
  let b = 1;
  let sum;
  for (let i = 0; i < n; i++) {
    sum = (a + b) % 1000000007;
    a = b;
    b = sum;
  }
  return a;
};
