// https://leetcode.cn/problems/fei-bo-na-qi-shu-lie-lcof/description/?envType=featured-list&envId=xb9nqhhg

/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  let fib = 0,
    fib1 = 0,
    fib2 = 1;
  if (n == 1) return fib2;
  while (n > 1) {
    fib = (fib1 + fib2) % 1000000007;
    fib1 = fib2;
    fib2 = fib;
    n--;
  }
  return fib;
};
