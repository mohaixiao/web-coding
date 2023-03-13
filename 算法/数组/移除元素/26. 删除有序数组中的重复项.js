// https://leetcode.cn/problems/remove-duplicates-from-sorted-array/

// 思路：设置一个k，更新数组长度，在循环遍历数组的时候，遇到不重复的就k++。

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let k = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== nums[i + 1])
            nums[k++] = nums[i]
    }
    return k
};