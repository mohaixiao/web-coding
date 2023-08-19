// https://leetcode.cn/problems/diao-zheng-shu-zu-shun-xu-shi-qi-shu-wei-yu-ou-shu-qian-mian-lcof/?envType=featured-list&envId=xb9nqhhg

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function (nums) {
  let i = 0;
  let j = nums.length - 1;
  let tmp;
  while (i < j) {
    while (i < j && (nums[i] & 1) == 1) i++; // 奇数就移动
    while (i < j && (nums[j] & 1) == 0) j--; // 偶数就移动
    tmp = nums[i];
    nums[i] = nums[j];
    nums[j] = tmp;
  }
  return nums;
};
