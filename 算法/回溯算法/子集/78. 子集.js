https://leetcode.cn/problems/subsets/

// https://code-thinking.cdn.bcebos.com/pics/78.%E5%AD%90%E9%9B%86.png

var subsets = function (nums) {
    let result = []
    let path = []
    function backtracking(startIndex) {
        // 收集
        result.push([...path])
        // 终止条件
        if (startIndex >= nums.length) return;
        for (let i = startIndex; i < nums.length; i++) {
            path.push(nums[i])
            backtracking(i + 1)
            path.pop()
        }
    }
    backtracking(0)
    return result
};