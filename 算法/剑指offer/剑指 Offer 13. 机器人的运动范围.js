// https://leetcode.cn/problems/ji-qi-ren-de-yun-dong-fan-wei-lcof/?envType=featured-list&envId=xb9nqhhg

/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function (m, n, k) {
  let res = ["0,0"];
  // 队列
  let queue = [[0, 0]];
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  while (queue.length) {
    let cur = queue.shift();
    // 四个方向遍历
    for (let i = 0; i < 4; i++) {
      const a = cur[0] + dx[i];
      const b = cur[1] + dy[i];
      if (a < 0 || a >= m || b < 0 || b >= n || res.includes(`${a},${b}`)) {
        continue;
      }
      // 满足遍历条件，且res答案中不存在
      if (getSum(a) + getSum(b) <= k) {
        res.push(`${a},${b}`);
        queue.unshift([a, b]);
      }
    }
  }
  return res.length;
};

// 求位数和 0~100
function getSum(num) {
  let ans = 0;
  while (num) {
    ans += num % 10;
    num = Math.floor(num / 10);
  }
  return ans;
}
