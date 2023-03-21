// https://leetcode.cn/problems/jump-game/description

// https://code-thinking-1253855093.file.myqcloud.com/pics/20201124154758229-20230310135019977.png


var canJump = function (nums) {
    if (nums.length === 1) return true
    let cover = 0
    for (let i = 0; i <= cover; i++) {
        // 是否可以覆盖到数组末尾
        cover = Math.max(cover, i + nums[i])
        if (cover >= nums.length - 1) {
            return true
        }
    }
    return false
};