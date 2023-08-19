// https://leetcode.cn/problems/er-cha-sou-suo-shu-de-di-kda-jie-dian-lcof/?envType=featured-list&envId=xb9nqhhg

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
// var kthLargest = function (root, k) {
//     const arr = [];
//     dfs(root, arr);
//     if (k > 0 && k <= arr.length) {
//         return arr[arr.length - k];
//     }
//     return null;

//     function dfs(root, arr) {
//         if (root) {
//             dfs(root.left, arr);
//             arr.push(root.val);
//             dfs(root.right, arr);
//         }
//         return;
//     }
// };

var kthLargest = function (root, k) {
    const arr = [];
    const stack = [];
    let current = root;
    while (current || stack.length > 0) {
        while (current) {
            stack.push(current);
            current = current.left;
        }
        current = stack.pop();
        arr.push(current.val);
        current = current.right;
    }
    if (k > 0 && k <= arr.length) {
        return arr[arr.length - k];
    }
    return null;
};
