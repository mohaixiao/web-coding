// https://leetcode.cn/problems/palindrome-partitioning/

// https://code-thinking.cdn.bcebos.com/pics/131.%E5%88%86%E5%89%B2%E5%9B%9E%E6%96%87%E4%B8%B2.jpg

// https://code-thinking.cdn.bcebos.com/pics/131.%E5%88%86%E5%89%B2%E5%9B%9E%E6%96%87%E4%B8%B2.jpg

/**
 * @param {string} s
 * @return {string[][]}
 */
// 判断是否为回文字符串
const isPalindrome = (s, l, r) => {
    for (let i = l, j = r; i < j; i++, j--) {
        if (s[i] !== s[j]) return false;
    }
    return true;
}

var partition = function (s) {
    const res = [], path = [], len = s.length;
    backtracking(0);
    return res;
    // 递归回溯
    function backtracking(startIndex) {
        // 终止条件
        if (startIndex >= len) {
            res.push(Array.from(path));
            return;
        }
        for (let i = startIndex; i < len; i++) {
            // 判断是否为回文字符串
            if (!isPalindrome(s, startIndex, i)) continue;
            path.push(s.slice(startIndex, i + 1));
            backtracking(i + 1);
            path.pop();
        }
    }
};