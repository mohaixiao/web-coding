// https://leetcode.cn/problems/backspace-string-compare/

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