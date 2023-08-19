// https://leetcode.cn/problems/di-yi-ge-zhi-chu-xian-yi-ci-de-zi-fu-lcof/?envType=featured-list&envId=xb9nqhhg

/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function (s) {
  let map = new Map();
  for (let i of s) {
    if (!map.has(i)) {
      map.set(i, true);
    } else {
      map.set(i, false);
    }
  }
  for (let i of s) {
    if (map.get(i) == true) {
      return i;
    }
  }
  return " ";
};
