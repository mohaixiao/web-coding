// https://leetcode.cn/problems/er-cha-shu-de-shen-du-lcof/?envType=featured-list&envId=xb9nqhhg

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
/** dfs */
var maxDepth = function (root) {
  if (!root) return 0;
  let max = 0;
  const dfs = function (root, depth) {
    root.left && dfs(root.left, depth + 1);
    max = Math.max(max, depth);
    root.right && dfs(root.right, depth + 1);
  };
  dfs(root, 1);
  return max;
};
