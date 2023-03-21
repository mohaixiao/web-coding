// https://leetcode.cn/problems/minimum-size-subarray-sum/

// l，r等于0 r 小于 数组长度，开始遍历，设置一个 sum 存储和，sum 大于等于target就开始更新ans，归还sum左边的值，移动l，循环知道right 等于长度。

var minSubArrayLen = function (target, nums) {
    let start, end
    start = end = 0
    let sum = 0
    let len = nums.length
    let ans = Infinity

    while (end < len) {
        sum += nums[end];
        while (sum >= target) {
            ans = Math.min(ans, end - start + 1); // 最小数组长度
            sum -= nums[start]; // 裁剪开头元素
            start++; //  左指针
        }
        end++; // 右指针
    }
    return ans === Infinity ? 0 : ans
};