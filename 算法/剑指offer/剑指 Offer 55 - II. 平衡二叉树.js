// https://leetcode.cn/problems/ping-heng-er-cha-shu-lcof/?envType=featured-list&envId=xb9nqhhg

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
  let flag = true;

  function dfs(root) {
    if (!root || !flag) {
      return 0;
    }
    const left = dfs(root.left);
    const right = dfs(root.right);
    if (Math.abs(left - right) > 1) {
      flag = false;
      return 0;
    }
    return Math.max(left, right) + 1;
  }
  dfs(root);
  return flag;
};
