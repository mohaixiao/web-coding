// https://leetcode.cn/problems/validate-binary-search-tree

// 辅助数组解决
// 思路：中序遍历，讲节点全部放入数组之中，for循环判断是否是递增数组

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
    let arr = [];
    const buildArr = (root) => {
        if (root) {
            buildArr(root.left);
            arr.push(root.val);
            buildArr(root.right);
        }
    }
    buildArr(root);
    for (let i = 1; i < arr.length; ++i) {
        if (arr[i] <= arr[i - 1])
            return false;
    }
    return true;
};

// 递归中解决
// 思路：设置pre变量保存前节点，root保持现节点
// 使用：root为null 直接返回
// 递归left
// 判断前节点是否和后节点大
// 更新pre节点
// 递归right节点
// 返回left && right

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
    let pre = null;
    const inOrder = (root) => {
        if (root === null) return true;
        // 递归left
        let left = inOrder(root.left);
        // 判断前节点是否和后节点大
        if (pre !== null && pre.val >= root.val) return false;
        // 更新pre节点
        pre = root;
        // 递归right
        let right = inOrder(root.right);
        // 返回left && right
        return left && right;
    }
    return inOrder(root);
};