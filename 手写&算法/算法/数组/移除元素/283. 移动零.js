// https://leetcode.cn/problems/move-zeroes/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let k = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0)
            nums[k++] = nums[i]
    }
    while (k < nums.length) {
        nums[k++] = 0
    }
    return nums
};