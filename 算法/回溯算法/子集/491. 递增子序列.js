// https://leetcode.cn/problems/non-decreasing-subsequences/

var findSubsequences = function (nums) {
    let result = []
    let path = []
    function backtracing(startIndex) {
        if (path.length > 1) {
            result.push(path.slice())
        }
        let uset = []
        for (let i = startIndex; i < nums.length; i++) {
            // 去重
            if ((path.length > 0 && nums[i] < path[path.length - 1]) || uset[nums[i] + 100]) {
                continue
            }
            uset[nums[i] + 100] = true // 确定该数已经使用
            path.push(nums[i])
            backtracing(i + 1)
            path.pop()
        }
    }
    backtracing(0)
    return result
};
