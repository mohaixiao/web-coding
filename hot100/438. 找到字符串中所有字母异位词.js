// https://leetcode.cn/problems/find-all-anagrams-in-a-string/?envType=study-plan-v2&envId=top-100-liked
/**
 * @param {string} s 源字符串（我们要在里面找）
 * @param {string} p 目标字符串（它的字母异位词）
 * @return {number[]} 返回所有起点下标
 */
var findAnagrams = function(s, p) {
    // 获取两个字符串长度
    const sLen = s.length;
    const pLen = p.length;

    // 如果 s 本身比 p 还短 → 直接不可能找到，返回空数组
    if (sLen < pLen) {
        return [];
    }

    // 结果数组，用来存符合条件的起始索引
    const ans = [];

    // 创建两个长度为 26 的数组（对应 26 个小写英文字母）
    // sCount：记录 s 窗口内字母出现次数
    // pCount：记录 p 字母出现次数
    const sCount = new Array(26).fill(0);
    const pCount = new Array(26).fill(0);

    // --------------------------
    // 第一步：初始化第一个窗口
    // --------------------------
    for (let i = 0; i < pLen; ++i) {
        // 统计 s 前 pLen 个字符的频次
        ++sCount[s[i].charCodeAt() - 'a'.charCodeAt()];
        // 统计 p 所有字符的频次
        ++pCount[p[i].charCodeAt() - 'a'.charCodeAt()];
    }

    // --------------------------
    // 第二步：判断第一个窗口是否符合
    // --------------------------
    if (sCount.toString() === pCount.toString()) {
        ans.push(0); // 符合就把起始下标 0 加进去
    }

    // --------------------------
    // 第三步：滑动窗口！核心！
    // --------------------------
    // 一共要滑动：sLen - pLen 次
    for (let i = 0; i < sLen - pLen; ++i) {
        // 1. 去掉窗口最左边的字符（离开窗口）
        --sCount[s[i].charCodeAt() - 'a'.charCodeAt()];

        // 2. 加入窗口右边新进来的字符
        ++sCount[s[i + pLen].charCodeAt() - 'a'.charCodeAt()];

        // 3. 每次滑动完，判断是否和 p 的字母频次一样
        if (sCount.toString() === pCount.toString()) {
            ans.push(i + 1); // 符合就记录起始位置
        }
    }

    // 返回所有结果
    return ans;
};