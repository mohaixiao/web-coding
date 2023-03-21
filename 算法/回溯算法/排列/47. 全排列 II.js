// https://leetcode.cn/problems/permutations-ii/

var permuteUnique = function (nums) {
    nums.sort((a, b) => a - b)
    let result = []
    let path = []

    function backtracing(used) {
        // 终止条件
        if (path.length === nums.length) {
            result.push([...path])
            return
        }
        for (let i = 0; i < nums.length; i++) {
            // 去重
            if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) {
                continue
            }
            // 回溯，这里的！used类似startIndex
            if (!used[i]) {
                used[i] = true
                path.push(nums[i])
                backtracing(used)
                path.pop()
                used[i] = false
            }
        }
    }
    backtracing([])
    return result
};


function permuteUnique(nums) {
    const resArr = [];
    const usedArr = [];
    backTracking(nums, []);
    return resArr;
    function backTracking(nums, route) {
        if (nums.length === route.length) {
            resArr.push([...route]);
            return;
        }
        const usedSet = new Set();
        for (let i = 0, length = nums.length; i < length; i++) {
            if (usedArr[i] === true || usedSet.has(nums[i])) continue;
            usedSet.add(nums[i]);
            route.push(nums[i]);
            usedArr[i] = true;
            backTracking(nums, route);
            usedArr[i] = false;
            route.pop();
        }
    }
};
