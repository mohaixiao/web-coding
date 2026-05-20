// https://leetcode.cn/problems/subarray-sum-equals-k/description/?envType=study-plan-v2&envId=top-100-liked

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    // 哈希表：键=前缀和，值=这个前缀和出现过几次
    let map = new Map();
    // 初始化：前缀和为0 先出现1次（用来匹配从数组开头开始的子数组）
    map.set(0, 1);
    // preSum 记录遍历到当前位置的前缀和
    let preSum = 0;
    // 统计满足条件的子数组总数
    let res = 0;

    // 逐个遍历数组元素
    for(let num of nums) {
        // 累加，更新当前前缀和
        preSum += num;

        // 找前面有没有出现过 preSum - k
        if(map.has(preSum - k)){
            // 有就把出现次数加到结果里
            res += map.get(preSum - k);
        }

        // 把当前前缀和存入哈希表，次数+1
        map.set(preSum, (map.get(preSum) || 0) + 1);
    }
    return res;
};