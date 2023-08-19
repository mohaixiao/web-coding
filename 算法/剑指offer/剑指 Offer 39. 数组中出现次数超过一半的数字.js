// https://leetcode.cn/problems/shu-zu-zhong-chu-xian-ci-shu-chao-guo-yi-ban-de-shu-zi-lcof/?envType=featured-list&envId=xb9nqhhg

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  if (nums && nums.length > 0) {
    let length = nums.length;
    let temp = {};
    for (let i = 0; i < length; i++) {
      if (temp[nums[i]]) {
        temp[nums[i]]++;
      } else {
        temp[nums[i]] = 1;
      }
      if (temp[nums[i]] > length / 2) {
        return nums[i];
      }
    }
  }
  return 0;
};
