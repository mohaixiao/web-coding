// 数组为有序数组，同时题目还强调数组中无重复元素，因为一旦有重复元素，使用二分查找法返回的元素下标可能不是唯一的，这些都是使用二分法的前提条件，当大家看到题目描述满足如上条件的时候，可要想一想是不是可以用二分法了。

// JavaScript: （版本一）左闭右闭区间 [left, right]

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    // right是数组最后一个数的下标，num[right]在查找范围内，是左闭右闭区间
    let mid, left = 0, right = nums.length - 1;
    // 当left=right时，由于nums[right]在查找范围内，所以要包括此情况
    while (left <= right) {
        // 位运算 + 防止大数溢出
        mid = left + ((right - left) >> 1);
        // 如果中间数大于目标值，要把中间数排除查找范围，所以右边界更新为mid-1；如果右边界更新为mid，那中间数还在下次查找范围内
        if (nums[mid] > target) {
            right = mid - 1;  // 去左面闭区间寻找
        } else if (nums[mid] < target) {
            left = mid + 1;   // 去右面闭区间寻找
        } else {
            return mid;
        }
    }
    return -1;
};
// （版本二）左闭右开区间 [left, right)

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    // right是数组最后一个数的下标+1，nums[right]不在查找范围内，是左闭右开区间
    let mid, left = 0, right = nums.length;    
    // 当left=right时，由于nums[right]不在查找范围，所以不必包括此情况
    while (left < right) {
        // 位运算 + 防止大数溢出
        mid = left + ((right - left) >> 1);
        // 如果中间值大于目标值，中间值不应在下次查找的范围内，但中间值的前一个值应在；
        // 由于right本来就不在查找范围内，所以将右边界更新为中间值，如果更新右边界为mid-1则将中间值的前一个值也踢出了下次寻找范围
        if (nums[mid] > target) {
            right = mid;  // 去左区间寻找
        } else if (nums[mid] < target) {
            left = mid + 1;   // 去右区间寻找
        } else {
            return mid;
        }
    }
    return -1;
};