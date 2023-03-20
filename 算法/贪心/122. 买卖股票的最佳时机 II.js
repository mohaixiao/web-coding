// https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-ii/

// 贪心
var maxProfit = function (prices) {
    let result = 0
    for (let i = 1; i < prices.length; i++) {
        result += Math.max(prices[i] - prices[i - 1], 0)
    }
    return result
};

// 动态规划
const maxProfit = (prices) => {
    let dp = Array.from(Array(prices.length), () => Array(2).fill(0));
    // dp[i][0] 表示第i天持有股票所得现金。
    // dp[i][1] 表示第i天不持有股票所得最多现金
    dp[0][0] = 0 - prices[0];
    dp[0][1] = 0;
    for (let i = 1; i < prices.length; i++) {
        // 如果第i天持有股票即dp[i][0]， 那么可以由两个状态推出来
        // 第i-1天就持有股票，那么就保持现状，所得现金就是昨天持有股票的所得现金 即：dp[i - 1][0]
        // 第i天买入股票，所得现金就是昨天不持有股票的所得现金减去 今天的股票价格 即：dp[i - 1][1] - prices[i]
        dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] - prices[i]);

        // 在来看看如果第i天不持有股票即dp[i][1]的情况， 依然可以由两个状态推出来
        // 第i-1天就不持有股票，那么就保持现状，所得现金就是昨天不持有股票的所得现金 即：dp[i - 1][1]
        // 第i天卖出股票，所得现金就是按照今天股票佳价格卖出后所得现金即：prices[i] + dp[i - 1][0]
        dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] + prices[i]);
    }

    return dp[prices.length - 1][1];
};
