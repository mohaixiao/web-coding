// https://leetcode.cn/problems/restore-ip-addresses/

// https://code-thinking-1253855093.file.myqcloud.com/pics/20201123203735933.png

// https://code-thinking-1253855093.file.myqcloud.com/pics/20201123203735933-20230310132314109.png

/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
    const res = [], path = [];
    backtracking(0, 0)
    return res;
    function backtracking(i) {
        const len = path.length;
        // ip地址长度不能大于4
        if (len > 4) return;
        // 满足ip地址条件
        if (len === 4 && i === s.length) {
            res.push(path.join("."));
            return;
        }
        // 
        for (let j = i; j < s.length; j++) {
            const str = s.slice(i, j + 1);
            // 剪纸 ip地址不满足的格式去掉
            if (str.length > 3 || +str > 255) break;
            if (str.length > 1 && str[0] === "0") break;
            path.push(str);
            backtracking(j + 1);
            path.pop()
        }
    }
};