// https://leetcode.cn/problems/backspace-string-compare/

// 思路：i,j分别为S,T字符串的末尾，开始循环(i >= 0 || j >= 0)，遇到#就存起来（i--，j--），有存#就删字母（i--
// ，j--），然后再比较没有被删和不是#的字母（i--，j--）

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var backspaceCompare = function (s, t) {
    let i = s.length - 1;
    let j = t.length - 1;
    let sN = 0;
    let tN = 0;
    while (i >= 0 || j >= 0) {
        while (j >= 0) {
            if (t[j] === '#') {
                j--
                tN++
            } else if (tN) {
                j--
                tN--
            } else {
                break; // 跳出进行比较
            }
        }
        while (i >= 0) {
            if (s[i] === '#') {
                i--;
                sN++;
            } else if (sN) {
                sN--;
                i--;
            } else {
                break;
            }
        }
        // 比较没有被删和不是#的字母
        if (s[i] !== t[j]) return false;
        i--
        j--
    }
    return true
}