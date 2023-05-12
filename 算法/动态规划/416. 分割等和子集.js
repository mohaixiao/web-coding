// https://leetcode.cn/problems/partition-equal-subset-sum/


/**
 * @param {number[]} nums
 * @return {boolean}
 */
function canPartition(nums) {
    const sum = (nums.reduce((p, v) => p + v));
    if (sum & 1) return false; // 判断奇数
    const dp = new Array(sum / 2 + 1).fill(0);
    for (let i = 0; i < nums.length; i++) {
        for (let j = sum / 2; j >= nums[i]; j--) {
            dp[j] = Math.max(dp[j], dp[j - nums[i]] + nums[i]);
            if (dp[j] === sum / 2) {
                return true;
            }
        }
    }
    console.log(dp);
    return dp[sum / 2] === sum / 2;
};
