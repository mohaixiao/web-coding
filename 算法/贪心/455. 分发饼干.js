// https://leetcode.cn/problems/assign-cookies/

// https://code-thinking-1253855093.file.myqcloud.com/pics/20230112102848.png

var findContentChildren = function (g, s) {
    g = g.sort((a, b) => a - b)
    s = s.sort((a, b) => a - b)
    let result = 0
    let index = s.length - 1
    for (let i = g.length - 1; i >= 0; i--) {
        if (index >= 0 && s[index] >= g[i]) {
            result++
            index--
        }
    }
    return result
};