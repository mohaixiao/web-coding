// https://leetcode.cn/problems/squares-of-a-sorted-array/

// 思路：先给数组排序，i,j指针遍历数组，收尾平方比大小，大的放新数组末尾。使用k设置新数组和数组一样长度。

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