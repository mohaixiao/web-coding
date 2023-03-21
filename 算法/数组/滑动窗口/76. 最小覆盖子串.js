// https://leetcode.cn/problems/minimum-window-substring/submissions/362545832/

// 滑动窗口，就是不断的调节子序列的起始位置和终止位置，从而得出我们要想的结果。一般，lr等于0，拿r和长度进行循环，在循环里面某个条件更新l，在更新l之后一般就会计算r和l之间的长度或者什么。。

// 思路：l，r指针都等于0，r指针和s长度进行while循环，l在更新res长度之后再移动，使用map存储t字符串（短的），while循环去掉map，直到map为空（Types === 0），取right + 1 - left长度，归还map一个字符，移动left。直到right 到 s末尾。

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