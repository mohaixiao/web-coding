// https://leetcode.cn/problems/minimum-size-subarray-sum/

// 滑动窗口，就是不断的调节子序列的起始位置和终止位置，从而得出我们要想的结果。

var minSubArrayLen = function(target, nums) {
    let start, end
    start = end = 0
    let sum = 0
    let len = nums.length
    let ans = Infinity
    
    while(end < len){
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