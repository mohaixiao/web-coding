// https://leetcode.cn/problems/search-insert-position/

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