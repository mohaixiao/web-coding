// https://leetcode.cn/problems/ti-huan-kong-ge-lcof/

/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function (s) {
    // 字符串转为数组
    const strArr = Array.from(s);
    let count = 0;

    // 计算空格数量
    for (let i = 0; i < strArr.length; i++) {
        if (strArr[i] === ' ') {
            count++;
        }
    }
    // 计算指针位置
    let left = strArr.length - 1;
    let right = strArr.length + count * 2 - 1;

    while (left >= 0) {
        // 遇到空指针就多次移动右指针
        if (strArr[left] === ' ') {
            strArr[right--] = '0';
            strArr[right--] = '2';
            strArr[right--] = '%';
            left--;
        } else {
            // 不是空直接赋值
            strArr[right--] = strArr[left--];
        }
    }

    // 数组转字符串
    return strArr.join('');
};