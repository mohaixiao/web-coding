// 572. 另一棵树的子树
// https://leetcode.cn/problems/subtree-of-another-tree/

// 思路：使用递归，对比函数依旧是对比 空， 半空， 不一样的情况，递归每次传入主树的不同节点。不适合使用层序遍历。

/**
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function (root, subRoot) {
    if (!root) return false
    if (compare(root, subRoot)) return true;
    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};


function compare(left, right) {
    if (left === null && right === null) {
        return true;
    }
    if ((left !== null && right === null) || (left === null && right !== null)) return false;
    else if (left === right === null) return true;
    else if (left.val !== right.val) return false;
    let m = compare(left.left, right.left);
    let n = compare(left.right, right.right);
    return m && n;
}