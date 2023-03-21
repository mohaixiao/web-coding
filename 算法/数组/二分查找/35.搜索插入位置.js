// https://leetcode.cn/problems/search-insert-position/

// 思路：二分，在target >= nums【mids】 才更新ans，ans初始化为数组长度,（直接加到末尾的情况）。毕竟是在同样大的数值后边更新。

var searchInsert = function (nums, target) {
    let l = 0, r = nums.length - 1, ans = nums.length;
    while (l <= r) {
        const mid = l + Math.floor((r - l) >> 1);
        if (nums[mid] < target) {
            l = mid + 1;
        } else {
            ans = mid;
            r = mid - 1;
        }
    }
    return ans;
};