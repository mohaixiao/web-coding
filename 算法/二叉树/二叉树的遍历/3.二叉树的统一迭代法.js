// https://leetcode.cn/problems/binary-tree-preorder-traversal/
// https://leetcode.cn/problems/binary-tree-inorder-traversal/
// https://leetcode.cn/problems/binary-tree-postorder-traversal/

// https://code-thinking.cdn.bcebos.com/gifs/%E4%B8%AD%E5%BA%8F%E9%81%8D%E5%8E%86%E8%BF%AD%E4%BB%A3%EF%BC%88%E7%BB%9F%E4%B8%80%E5%86%99%E6%B3%95%EF%BC%89.gif

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
 * @return {number[]}
 */

// 前序遍历统一迭代法


// 前序遍历：中左右
// 压栈顺序：右左中

var preorderTraversal = function (root, res = []) {
    const stack = [];
    if (root) stack.push(root);
    while (stack.length) {
        const node = stack.pop();
        // node为null
        if (!node) {
            res.push(stack.pop().val);
            continue;
        }
        // 推入元素
        if (node.right) stack.push(node.right); // 右
        if (node.left) stack.push(node.left); // 左
        stack.push(node); // 中
        stack.push(null);
    };
    return res;
};

// 中序遍历统一迭代法


//  中序遍历：左中右
//  压栈顺序：右中左

var inorderTraversal = function (root, res = []) {
    const stack = [];
    if (root) stack.push(root);
    while (stack.length) {
        const node = stack.pop();
        // node为null
        if (!node) {
            res.push(stack.pop().val);
            continue;
        }
        if (node.right) stack.push(node.right); // 右
        stack.push(node); // 中
        stack.push(null);
        if (node.left) stack.push(node.left); // 左
    };
    return res;
};

// 后序遍历统一迭代法


// 后续遍历：左右中
// 压栈顺序：中右左

var postorderTraversal = function (root, res = []) {
    const stack = [];
    if (root) stack.push(root);
    while (stack.length) {
        const node = stack.pop();
        if (!node) {
            res.push(stack.pop().val);
            continue;
        }
        stack.push(node); // 中
        stack.push(null);
        if (node.right) stack.push(node.right); // 右
        if (node.left) stack.push(node.left); // 左
    };
    return res;
};
