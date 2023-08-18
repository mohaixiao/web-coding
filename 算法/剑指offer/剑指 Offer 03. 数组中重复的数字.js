// 剑指 Offer 03. 数组中重复的数字
// https://leetcode.cn/problems/shu-zu-zhong-zhong-fu-de-shu-zi-lcof/?envType=featured-list&envId=xb9nqhhg

/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function (nums) {
  let map = new Map();
  for (let i of nums) {
    if (map.has(i)) return i;
    map.set(i, 1);
  }
  return null;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function (nums) {
  nums = nums.sort();
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] == nums[i + 1]) {
      return nums[i];
    }
  }
};
