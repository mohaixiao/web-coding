// https://leetcode.cn/problems/permutations/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    const res = [], path = [];
    backtracking(nums, nums.length, []);
    return res;

    function backtracking(n, k, used) {
        if (path.length === k) {
            res.push(Array.from(path));
            return;
        }
        for (let i = 0; i < k; i++) {
            // 一个值只可以使用一次
            if (used[i]) continue;
            path.push(n[i]);
            used[i] = true; // 标记该值已经使用
            backtracking(n, k, used);
            path.pop();
            used[i] = false;
        }
    }
};
