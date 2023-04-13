https://leetcode.cn/problems/fibonacci-number/

// 对于动态规划问题，我将拆解为如下五步曲，这五步都搞清楚了，才能说把动态规划真的掌握了！

// 确定dp数组（dp table）以及下标的含义
// 确定递推公式
// dp数组如何初始化
// 确定遍历顺序
// 举例推导dp数组

// 解法一

var fib = function (n) {
    let dp = [0, 1]
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2]
    }
    console.log(dp)
    return dp[n]
};

// 解法二：时间复杂度O(N)，空间复杂度O(1)

var fib = function (n) {
    // 动规状态转移中，当前结果只依赖前两个元素的结果，所以只要两个变量代替dp数组记录状态过程。将空间复杂度降到O(1)
    let pre1 = 1
    let pre2 = 0
    let temp
    if (n === 0) return 0
    if (n === 1) return 1
    for (let i = 2; i <= n; i++) {
        temp = pre1
        pre1 = pre1 + pre2
        pre2 = temp
    }
    return pre1
};
