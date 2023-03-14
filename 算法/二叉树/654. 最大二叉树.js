// https://leetcode.cn/problems/maximum-binary-tree/

// 思路：使用递归，不断根据数组最大值的下标分割数组，然后递归。
// BuildTree(nums, 0, nums.length - 1);
// 步骤：
// 1 for循环找到数组最大值 
// 2根据1 创建头结点
// 3创建的头节点上递归已经分割的数组

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function (nums) {
    const BuildTree = (arr, left, right) => {
        if (left > right)
            return null;
        let maxValue = -1;
        let maxIndex = -1;
        // 找到数组最大值 切割数组
        for (let i = left; i <= right; ++i) {
            if (arr[i] > maxValue) {
                maxValue = arr[i];
                maxIndex = i;
            }
        }
        let root = new TreeNode(maxValue);
        // 递归
        root.left = BuildTree(arr, left, maxIndex - 1); // 最大值左边数组
        root.right = BuildTree(arr, maxIndex + 1, right); // 最大值右边数组
        return root;
    }
    let root = BuildTree(nums, 0, nums.length - 1);
    return root;
};