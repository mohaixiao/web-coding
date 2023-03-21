// https://leetcode.cn/problems/4sum/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
    // 数组长度
    const len = nums.length;
    // 小于4直接返回空数组
    if (len < 4) return [];
    // 排序
    nums.sort((a, b) => a - b);
    const res = [];
    // 遍历到倒数第4个结束
    for (let i = 0; i < len - 3; i++) {
        // 去重i
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        // 遍历到倒数第3个数结束
        for (let j = i + 1; j < len - 2; j++) {
            // 去重j
            if (j > i + 1 && nums[j] === nums[j - 1]) continue;
            let l = j + 1, r = len - 1;
            while (l < r) {
                const sum = nums[i] + nums[j] + nums[l] + nums[r];
                if (sum < target) { l++; continue }
                if (sum > target) { r--; continue }
                res.push([nums[i], nums[j], nums[l], nums[r]]);
                // 对nums[left]和nums[right]去重
                while (l < r && nums[l] === nums[++l]);
                while (l < r && nums[r] === nums[--r]);
            }
        }
    }
    return res;
};

