// https://leetcode.cn/problems/que-shi-de-shu-zi-lcof/?envType=featured-list&envId=xb9nqhhg

/**
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let i = 0;
  let j = nums.length - 1;

  while (i <= j) {
    let m = i + ((j - i) >> 1);
    if (m == nums[m]) {
      i = m + 1;
    } else {
      j = m - 1;
    }
  }
  return i;
};
