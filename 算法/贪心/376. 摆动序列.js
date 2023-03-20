// https://leetcode.cn/problems/wiggle-subsequence/

// https://code-thinking-1253855093.file.myqcloud.com/pics/20201124174327597.png

// 贪心
var wiggleMaxLength = function (nums) {
    if (nums.length <= 1) return nums.length
    let result = 1
    let preDiff = 0
    let curDiff = 0
    for (let i = 0; i < nums.length - 1; i++) {
        curDiff = nums[i + 1] - nums[i]
        if ((curDiff > 0 && preDiff <= 0) || (curDiff < 0 && preDiff >= 0)) {
            result++
            // 考虑第三种平坡
            preDiff = curDiff
        }
    }
    return result
};

// 动态规划
var wiggleMaxLength = function (nums) {
    if (nums.length === 1) return 1;
    // 考虑前i个数，当第i个值作为峰谷时的情况（则第i-1是峰顶）
    let down = 1;
    // 考虑前i个数，当第i个值作为峰顶时的情况（则第i-1是峰谷）
    let up = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < nums[i - 1]) {
            down = Math.max(up + 1, down);
        }
        if (nums[i] > nums[i - 1]) {
            up = Math.max(down + 1, up)
        }
    }
    return Math.max(down, up);
};