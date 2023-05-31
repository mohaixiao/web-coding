// https://leetcode.cn/problems/find-the-duplicate-number/

// 找出数组中重复出现的元素（随便找一个就行）要求时间O(n)，空间O(1)287. 寻找重复数
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
    let arr = [];
    for (let i = 0; i < nums.length; i++) {
        if (arr[nums[i]]) {
            return arr[nums[i]];
        } else {
            arr[nums[i]] = nums[i];
        }
    }
};


var findDuplicate = function (nums) {
    const n = nums.length;
    let l = 1, r = n - 1, ans = -1;
    while (l <= r) {
        let mid = (l + r) >> 1;
        let cnt = 0;
        for (let i = 0; i < n; ++i) {
            cnt += nums[i] <= mid; // 统计数组nums中小于等于mid的元素个数
        }
        // 如果 cnt 不大于 mid，则说明重复元素在 [mid+1, r] 范围内，更新 l = mid + 1；
        if (cnt <= mid) {
            l = mid + 1;
        } else {
            // 如果 cnt 大于 mid，则说明重复元素在 [l, mid-1] 范围内，更新 r = mid - 1，并更新 ans = mid；
            r = mid - 1;
            ans = mid;
        }
    }
    return ans;
};
