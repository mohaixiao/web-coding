// https://leetcode.cn/problems/shu-zhi-de-zheng-shu-ci-fang-lcof/description/?envType=featured-list&envId=xb9nqhhg

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  let res = 1;
  let y = n;
  if (n < 0) {
    y = -y;
    x = 1 / x;
  }
  while (y > 0) {
    if (y % 2 == 1) {
      res = res * x;
    }
    x = x * x;
    console.log(x, res);
    y = Math.floor(y / 2);
  }
  return res;
};
