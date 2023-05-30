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
        if (cnt <= mid) {
            l = mid + 1;
        } else {
            r = mid - 1;
            ans = mid;
        }
    }
    return ans;
};
