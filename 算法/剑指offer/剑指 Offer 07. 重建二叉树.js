// https://leetcode.cn/problems/zhong-jian-er-cha-shu-lcof/?envType=featured-list&envId=xb9nqhhg

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  if (preorder.length === 0) {
    return null;
  }
  if (preorder.length === 1) {
    return new TreeNode(preorder[0]);
  }
  const value = preorder[0];
  const index = inorder.indexOf(value);
  const indexOfLeft = inorder.slice(0, index);
  const indexOfRight = inorder.slice(index + 1);
  const preorderLeft = preorder.slice(1, index + 1);
  const preorderRight = preorder.slice(index + 1);

  const node = new TreeNode(value);
  node.left = buildTree(preorderLeft, indexOfLeft);
  node.right = buildTree(preorderRight, indexOfRight);
  return node;
};
