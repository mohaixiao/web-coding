// https://leetcode.cn/problems/squares-of-a-sorted-array/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
    let k = nums.length - 1;
    let j = nums.length - 1;
    let i = 0;
    let arr = []
    while (i <= j) {
        if (nums[i] * nums[i] <= nums[j] * nums[j]) {
            arr[k--] = nums[j] * nums[j];
            j--
        } else {
            arr[k--] = nums[i] * nums[i];
            i++
        }
    }
    return arr;
};