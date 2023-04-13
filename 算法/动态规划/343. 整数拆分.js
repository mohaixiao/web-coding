// https://leetcode.cn/problems/integer-break/description/

var integerBreak = function (n) {

    //     可以想 dp[i]最大乘积是怎么得到的呢？

    // 其实可以从1遍历j，然后有两种渠道得到dp[i].

    // 一个是j * (i - j) 直接相乘。

    // 一个是j * dp[i - j]，相当于是拆分(i - j)，对这个拆分不理解的话，可以回想dp数组的定义。
    let dp = new Array(n + 1).fill(0)
    dp[2] = 1

    for (let i = 3; i <= n; i++) {
        for (let j = 1; j <= i / 2; j++) {
            dp[i] = Math.max(dp[i], dp[i - j] * j, (i - j) * j)
        }
    }
    return dp[n]
};