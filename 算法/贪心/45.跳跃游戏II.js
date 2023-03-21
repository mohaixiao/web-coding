// https://leetcode.cn/problems/jump-game-ii/

var jump = function (nums) {
    let curIndex = 0
    let nextIndex = 0
    let steps = 0
    for (let i = 0; i < nums.length - 1; i++) {
        // 取得一步可以迈开的最大距离
        nextIndex = Math.max(nums[i] + i, nextIndex)
        // 移动下标达到了当前覆盖的最远距离下标时，步数就要加一，来增加覆盖距离。
        // 如果当前覆盖最远距离下标不是是集合终点，步数就加一，还需要继续走。
        // 如果当前覆盖最远距离下标就是是集合终点，步数不用加一，因为不能再往后走了。
        if (i === curIndex) {
            curIndex = nextIndex
            steps++
        }
    }
    return steps
};