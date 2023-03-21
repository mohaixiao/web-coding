// https://leetcode.cn/problems/find-first-and-last-position-of-element-in-sorted-array/

// 思路：通过两次二分查找，找到左边界和后边界，边界初始值都为-2，左边界和right保持一样，右边界和left保持一样。
// 边界内部有-2（优先判断） 没找到 返回【-1，-1】 边界之间最少间隔2个数，相减大于1 返回对应 [leftBorder + 1, rightBorder - 1];
// 其他情况返回 【-1，-1】

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var searchRange = function (nums, target) {
    const getLeftBorder = (nums, target) => {
        let left = 0, right = nums.length - 1;
        let leftBorder = -2;// 记录一下leftBorder没有被赋值的情况
        while (left <= right) {
            let middle = left + ((right - left) >> 1);
            if (nums[middle] >= target) { // 寻找左边界，nums[middle] == target的时候更新right
                right = middle - 1;
                leftBorder = right;
            } else {
                left = middle + 1;
            }
        }
        return leftBorder;
    }

    const getRightBorder = (nums, target) => {
        let left = 0, right = nums.length - 1;
        let rightBorder = -2; // 记录一下rightBorder没有被赋值的情况
        while (left <= right) {
            let middle = left + ((right - left) >> 1);
            if (nums[middle] > target) {
                right = middle - 1;
            } else { // 寻找右边界，nums[middle] == target的时候更新left
                left = middle + 1;
                rightBorder = left;
            }
        }
        return rightBorder;
    }

    let leftBorder = getLeftBorder(nums, target);
    let rightBorder = getRightBorder(nums, target);
    // 情况一
    if (leftBorder === -2 || rightBorder === -2) return [-1, -1];
    // 情况三
    if (rightBorder - leftBorder > 1) return [leftBorder + 1, rightBorder - 1];
    // 情况二
    return [-1, -1];
};