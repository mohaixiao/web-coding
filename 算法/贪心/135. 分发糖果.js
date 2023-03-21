// https://leetcode.cn/problems/candy/

var candy = function (ratings) {
    let candys = new Array(ratings.length).fill(1)

    // 左边遍历
    for (let i = 1; i < ratings.length; i++) {
        if (ratings[i] > ratings[i - 1]) {
            candys[i] = candys[i - 1] + 1
        }
    }

    // 右边遍历
    for (let i = ratings.length - 2; i >= 0; i--) {
        if (ratings[i] > ratings[i + 1]) {
            // 最后糖果值取两次遍历的最大值，这样才满足比左右都大
            candys[i] = Math.max(candys[i], candys[i + 1] + 1)
        }
    }

    let count = candys.reduce((a, b) => {
        return a + b
    })

    return count
};