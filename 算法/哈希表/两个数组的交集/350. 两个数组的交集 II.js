// https://leetcode.cn/problems/intersection-of-two-arrays-ii/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
    // 将长的数组作为nums1
    if (nums1.length < nums2.length) {
        [nums1, nums2] = [nums2, nums1];
    }
    // 设置一个setNums1存储nums1，设置一个空setNums2来存储nums2
    let setNums1 = new Map();
    let setNums2 = new Array();

    for (let i in nums1) {
        if (!setNums1.has(nums1[i])) {
            setNums1.set(nums1[i], 1);
        } else {
            setNums1.set(nums1[i], setNums1.get(nums1[i]) + 1);
        }
    }
    // 循环遍历如果setNums1有，就存入setNums2 ,并删除减一
    for (let i = nums2.length - 1; i >= 0; i--) {
        setNums1.has(nums2[i]) &&
            setNums2.push(nums2[i]) &&
            setNums1.set(nums2[i], setNums1.get(nums2[i]) - 1);
        if (setNums1.get(nums2[i]) <= 0) {
            setNums1.delete(nums2[i]);
        }
    }
    return setNums2;
};