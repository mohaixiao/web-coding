// https://leetcode.cn/problems/zui-xiao-de-kge-shu-lcof/?envType=featured-list&envId=xb9nqhhg

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  if (Array.isArray(nums) && nums.length >= 1) {
    let sum = nums[0];
    let max = nums[0];
    for (let i = 1; i < nums.length; i++) {
      if (sum < 0) {
        sum = nums[i];
      } else {
        sum = sum + nums[i];
      }
      if (sum > max) {
        max = sum;
      }
    }
    return max;
  }
  return 0;
};
