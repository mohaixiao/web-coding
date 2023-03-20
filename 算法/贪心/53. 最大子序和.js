// https://leetcode.cn/problems/maximum-subarray/

var maxSubArray = function (nums) {
    let result = -Infinity
    let count = 0
    for (let i = 0; i < nums.length; i++) {
        count += nums[i]
        // 大于就更新
        if (count > result) {
            result = count
        }
        // 为负数就抛弃
        if (count < 0) {
            count = 0
        }
    }
    return result
};