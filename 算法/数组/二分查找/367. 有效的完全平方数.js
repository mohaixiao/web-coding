// https://leetcode.cn/problems/valid-perfect-square/

// 思路：二分，l为1 r为x 计算mid * mid 和x 的大小

/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
    let left = 1;
    let right = num;
    while (left <= right) {
        let mid = left + ((right - left) >> 1);
        if (mid * mid > num) {
            right = mid - 1;
        } else if (mid * mid < num) {
            left = mid + 1;
        } else {
            return true;
        }
    }
    return false;
};