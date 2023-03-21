// https://leetcode.cn/problems/subsets-ii/

// https://code-thinking-1253855093.file.myqcloud.com/pics/20201124195411977.png

var subsetsWithDup = function (nums) {
    let result = []
    let path = []
    let sortNums = nums.sort((a, b) => a - b)
    function backtracing(startIndex, sortNums) {
        result.push([...path])
        if (startIndex > nums.length - 1) {
            return
        }
        for (let i = startIndex; i < nums.length; i++) {
            if (i > startIndex && nums[i] === nums[i - 1]) {
                continue
            }
            path.push(nums[i])
            backtracing(i + 1, sortNums)
            path.pop()
        }
    }
    backtracing(0, sortNums)
    return result
};


// 使用used数组判断重复

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
    let result = []
    let path = []
    let sortNums = nums.sort((a, b) => a - b)
    let len = nums.length;
    const used = new Array(len).fill(false);
    function backtracing(startIndex, sortNums) {
        result.push([...path])
        if (startIndex > nums.length - 1) {
            return
        }
        for (let i = startIndex; i < nums.length; i++) {
            if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) {
                continue
            }
            path.push(nums[i])
            used[i] = true;
            backtracing(i + 1, sortNums)
            path.pop()
            used[i] = false;
        }
    }
    backtracing(0, sortNums)
    return result
};


function subsetsWithDup(nums) {
    nums.sort((a, b) => a - b);
    const resArr = [];
    backTraking(nums, 0, []);
    return resArr;
    function backTraking(nums, startIndex, route) {
        resArr.push([...route]);
        const helperSet = new Set();
        for (let i = startIndex, length = nums.length; i < length; i++) {
            if (helperSet.has(nums[i])) continue;
            helperSet.add(nums[i]);
            route.push(nums[i]);
            backTraking(nums, i + 1, route);
            route.pop();
        }
    }
};