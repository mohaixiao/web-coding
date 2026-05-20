// https://leetcode.cn/problems/zui-chang-bu-han-zhong-fu-zi-fu-de-zi-zi-fu-chuan-lcof/description/

/**
 * 查找字符串中最长不重复子串的长度
 * 使用滑动窗口算法实现
 * @param {string} s - 输入字符串
 * @return {number} - 最长不重复子串的长度
 */
var lengthOfLongestSubstring = function (s) {
    // 边界条件处理
    if (s.length === 0) return 0;
    if (s.length === 1) return 1;
    
    // 将字符串转换为数组便于操作（也可以直接操作字符串）
    s = s.split('');
    
    // 滑动窗口指针：left表示窗口左边界，right表示窗口右边界
    let left = 0;
    let right = 0;
    
    // 记录最大窗口长度
    let maxLength = 1; // 最小长度为1（单个字符）
    
    // 使用哈希表记录字符最后出现的位置，优化查找效率
    const charMap = new Map();
    charMap.set(s[0], 0);
    
    // 滑动窗口遍历整个字符串
    while (right < s.length - 1) {
        right++; // 扩展右边界
        
        const currentChar = s[right];
        
        // 如果当前字符已经在窗口中出现过，且出现在当前窗口内
        if (charMap.has(currentChar) && charMap.get(currentChar) >= left) {
            // 移动左边界到重复字符的下一个位置
            left = charMap.get(currentChar) + 1;
        }
        
        // 更新字符的最新位置
        charMap.set(currentChar, right);
        
        // 计算当前窗口长度并更新最大值
        maxLength = Math.max(maxLength, right - left + 1);
    }
    
    return maxLength;
}