// https://leetcode.cn/problems/minimum-window-substring/?envType=study-plan-v2&envId=top-100-liked

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
/**
 * @param {string} s 源字符串
 * @param {string} t 目标子串
 * @return {string} 最小覆盖子串
 */
var minWindow = function(s, t) {
    // 用哈希表记录 t 中每个字符需要的数量
    const need = new Map();
    // 记录窗口中每个字符的数量
    const window = new Map();
    for (const c of t) {
        need.set(c, (need.get(c) || 0) + 1);
    }

    // 双指针
    let left = 0, right = 0;
    // 记录窗口中满足 need 条件的字符个数
    let valid = 0;
    // 记录最小覆盖子串的起始索引和长度
    let start = 0, minLen = Infinity;

    while (right < s.length) {
        // c 是即将加入窗口的字符
        const c = s[right];
        right++;

        // 进行窗口内数据更新
        if (need.has(c)) {
            window.set(c, (window.get(c) || 0) + 1);
            if (window.get(c) === need.get(c)) {
                valid++;
            }
        }

        // 左侧收缩（窗口满足条件时）
        while (valid === need.size) {
            // 更新最小覆盖子串
            if (right - left < minLen) {
                start = left;
                minLen = right - left;
            }

            // d 是即将移出窗口的字符
            const d = s[left];
            left++;

            // 进行窗口内数据更新
            if (need.has(d)) {
                if (window.get(d) === need.get(d)) {
                    valid--;
                }
                window.set(d, window.get(d) - 1);
            }
        }
    }

    // 返回结果
    return minLen === Infinity ? "" : s.substring(start, start + minLen);
};