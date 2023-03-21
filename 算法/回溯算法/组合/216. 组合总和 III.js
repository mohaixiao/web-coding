// https://leetcode.cn/problems/combination-sum-iii/

/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
    let res = [];
    let path = [];
    let sum = 0;
    const dfs = (path, index) => {
        // 剪枝操作
        if (sum > n) {
            return
        }
        if (path.length == k) {
            if (sum == n) {
                res.push([...path]);
                return
            }
        }
        // 递归回溯
        for (let i = index; i <= 9 - (k - path.length) + 1; i++) {
            path.push(i);
            sum = sum + i;
            index += 1;
            dfs(path, index);
            // 回溯
            sum -= i
            path.pop()
        }
    }
    dfs(path, 1);
    return res
};