// https://leetcode.cn/problems/move-zeroes/

// 思路：设置一个k，更新数组长度，在循环遍历数组的时候，遇到不等于0的就k++，循环结束之后就添加缺失长度该有的0。

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