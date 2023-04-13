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