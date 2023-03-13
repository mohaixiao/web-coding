// https://leetcode.cn/problems/shun-shi-zhen-da-yin-ju-zhen-lcof/

// 思路：设置一个新数组，声明数组的4个角落的点，在top < bottom && left < right的条件下，进行4个for循环，开始顺时针绕圈，并且收缩指针，循环结束之后判断是仅剩下一行还是一列，进而进行最后的for循环。

var spiralOrder = function (matrix) {
    if (matrix.length === 0) return []
    const res = []
    let top = 0, bottom = matrix.length - 1, left = 0, right = matrix[0].length - 1
    while (top < bottom && left < right) {
        for (let i = left; i < right; i++) res.push(matrix[top][i])   // 上层
        for (let i = top; i < bottom; i++) res.push(matrix[i][right]) // 右层
        for (let i = right; i > left; i--) res.push(matrix[bottom][i])// 下层
        for (let i = bottom; i > top; i--) res.push(matrix[i][left])  // 左层
        right--
        top++
        bottom--
        left++  // 四个边界同时收缩，进入内层
    }
    if (top === bottom) // 剩下一行，从左到右依次添加
        for (let i = left; i <= right; i++) res.push(matrix[top][i])
    else if (left === right) // 剩下一列，从上到下依次添加
        for (let i = top; i <= bottom; i++) res.push(matrix[i][left])
    return res
};