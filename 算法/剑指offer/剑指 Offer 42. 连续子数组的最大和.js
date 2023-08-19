// https://leetcode.cn/problems/lian-xu-zi-shu-zu-de-zui-da-he-lcof/description/?envType=featured-list&envId=xb9nqhhg

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let result = -Infinity;
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    count += nums[i];
    // 大于就更新
    if (count > result) {
      result = count;
    }
    // 为负数就抛弃
    if (count < 0) {
      count = 0;
    }
  }
  return result;
};
