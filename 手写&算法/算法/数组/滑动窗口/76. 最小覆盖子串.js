// https://leetcode.cn/problems/minimum-window-substring/submissions/362545832/

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    let left = 0;
    let right = 0;
    // 存储被包含的t字符串
    const map = new Map()
    for (let i of t) {
        map.set(i, map.has(i) ? map.get(i) + 1 : 1);
    }
    // 作为是否被包含的变量
    let Types = map.size;
    let res = '';
    while (right < s.length) {
        // 取每一次遍历的字符
        let c = s[right];
        if (map.has(c)) {
            map.set(c, map.get(c) - 1)
            if (map.get(c) == 0) Types--;
        }
        // 当字符完全被包含后
        while (Types == 0) {
            // 更新最小长度
            let newRes = s.substring(left, right + 1);
            if (!res || newRes.length < res.length) {
                res = newRes;
            }
            // 去掉左边第一个被包含的字符，然后left++继续遍历
            let c2 = s[left];
            if (map.has(c2)) {
                map.set(c2, map.get(c2) + 1);
                if (map.get(c2) == 1) Types++;
            }
            left++
        }
        right++;
    }
    return res;
};