https://leetcode.cn/problems/er-cha-shu-de-shen-du-lcof/


// 递归

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
    }
    dfs(root, 1);
    return max;
};

// 迭代

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
var maxDepth = function (root) {
    if (!root) return 0;
    let i = 0;
    let queue = [];
    queue.push(root);
    while (queue.length) {
        let temp = []
        for (let cur of queue) {
            if (cur.left) {
                temp.push(cur.left);
            }
            if (cur.right) {
                temp.push(cur.right);
            }
        }
        queue = temp;
        i++;
    }
    return i;
};


