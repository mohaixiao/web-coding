// https://leetcode.cn/problems/lowest-common-ancestor-of-a-binary-tree/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    const traveTree = (root, p, q) => {
        if (!root || root == p || root == q) {
            return root;
        }
        let left = traveTree(root.left, p, q);
        let right = traveTree(root.right, p, q);
        if (left !== null && right != null) {
            return root
        }
        return left || right;
    }
    return traveTree(root, p, q);
};