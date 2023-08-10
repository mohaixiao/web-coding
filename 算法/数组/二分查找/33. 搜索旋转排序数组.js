// https://leetcode.cn/problems/search-in-rotated-sorted-array/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let mid;
  while (left <= right) {
    mid = left + ((right - left) >> 1);
    if (nums[mid] === target) return mid;
    if (nums[left] <= nums[mid]) {
      //  不在该区域 [left，mid]  更新left
      if (nums[left] > target || nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    } else {
      // 不在[mid,right]区域 更新right
      if (nums[right] < target || target < nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
  }
  return -1;
};
