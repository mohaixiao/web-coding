// https://leetcode.cn/problems/merge-two-binary-trees/
// https://code-thinking.cdn.bcebos.com/gifs/617.%E5%90%88%E5%B9%B6%E4%BA%8C%E5%8F%89%E6%A0%91.gif

// 思路： 使用递归，
// 步骤
// 1 判断2个节点是否存在，返回仅存在的节点
// 2 1节点合并2节点
// 3 递归左右节点调用函数

// 递归法：
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function (root1, root2) {
    const preOrder = (root1, root2) => {
        // 单节点
        if (!root1)
            return root2
        if (!root2)
            return root1;
        // 合并节点
        root1.val += root2.val;
        // 递归调用
        root1.left = preOrder(root1.left, root2.left);
        root1.right = preOrder(root1.right, root2.right);
        return root1;
    }
    return preOrder(root1, root2);
};

// 思路： 使用迭代
// 步骤
// 判断2个节点是否存在，返回仅存在的节点
// 2 推入2个节点，进行遍历，取出节点进行合并，判断子节点是否成对，成对就进行推入，不成对就赋值


// 迭代法：
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function (root1, root2) {

    if (root1 === null) return root2;
    if (root2 === null) return root1;

    let queue = [];
    queue.push(root1);
    queue.push(root2);
    while (queue.length) {
        let node1 = queue.shift();
        let node2 = queue.shift();;
        // 合并
        node1.val += node2.val;
        // 成对就推入
        if (node1.left !== null && node2.left !== null) {
            queue.push(node1.left);
            queue.push(node2.left);
        }
        if (node1.right !== null && node2.right !== null) {
            queue.push(node1.right);
            queue.push(node2.right);
        }
        // 单个就赋值
        if (node1.left === null && node2.left !== null) {
            node1.left = node2.left;
        }
        if (node1.right === null && node2.right !== null) {
            node1.right = node2.right;
        }
    }
    return root1;
};
