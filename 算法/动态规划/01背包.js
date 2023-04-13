
function testWeightBagProblem(weight, value, size) {
    // 定义 dp 数组
    const len = weight.length,
        dp = Array(len).fill().map(() => Array(size + 1).fill(0));

    // 初始化 其他情况自动为0了
    for (let j = weight[0]; j <= size; j++) {
        dp[0][j] = value[0];
    }

    // weight 数组的长度len 就是物品个数
    for (let i = 1; i < len; i++) { // 遍历物品
        for (let j = 0; j <= size; j++) { // 遍历背包容量
            if (j < weight[i]) dp[i][j] = dp[i - 1][j];
            else dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - weight[i]] + value[i]);
        }
    }

    console.table(dp)

    return dp[len - 1][size];
}

function test() {
    console.log(testWeightBagProblem([1, 3, 4, 5], [15, 20, 30, 55], 6));
}

test();


function testWeightBagProblem(wight, value, size) {
    const len = wight.length,
        dp = Array(size + 1).fill(0);
    for (let i = 1; i <= len; i++) {
        for (let j = size; j >= wight[i - 1]; j--) {
            dp[j] = Math.max(dp[j], value[i - 1] + dp[j - wight[i - 1]]);
            console.table(dp);
        }
    }
    console.table(dp)
    return dp[size];
}

function test() {
    console.log(testWeightBagProblem([1, 3, 4, 5], [15, 20, 30, 55], 6));
}

test();