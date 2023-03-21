// https://leetcode.cn/problems/find-all-anagrams-in-a-string/solutions/1123971/zhao-dao-zi-fu-chuan-zhong-suo-you-zi-mu-xzin/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
    // 根据数组大小交换操作的数组
    if (nums1.length < nums2.length) {
        [nums2, nums1] = [nums1, nums2]
    }
    const nums1Set = new Set(nums1);
    const resSet = new Set();
    // for(const n of nums2) {
    //     nums1Set.has(n) && resSet.add(n);
    // }
    // 循环 比 迭代器快
    for (let i = nums2.length - 1; i >= 0; i--) {
        nums1Set.has(nums2[i]) && resSet.add(nums2[i]);
    }
    return Array.from(resSet);
};