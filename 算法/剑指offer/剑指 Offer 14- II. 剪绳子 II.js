
// https://leetcode.cn/problems/jian-sheng-zi-ii-lcof/description/?envType=featured-list&envId=xb9nqhhg


/**
 * @param {number} n
 * @return {number}
 */
var cuttingRope = function (n) {
  let dp = new Array(n + 1).fill(BigInt(1));
  dp[2] = 1n;
  const max = (...args) =>
    args.reduce((prev, curr) => (prev > curr ? prev : curr));

  for (let i = 3; i <= n; i++) {
    for (let j = 1; j <= i / 2; j++) {
      dp[i] = max(dp[i], dp[i - j] * BigInt(j), BigInt(j * (i - j)));
    }
  }
  return dp[n] % 1000000007n;
};
