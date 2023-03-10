// 102 https://leetcode.cn/problems/binary-tree-level-order-traversal/

// https://code-thinking.cdn.bcebos.com/gifs/102%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E5%B1%82%E5%BA%8F%E9%81%8D%E5%8E%86.gif

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
 * @return {number[][]}
 */
var levelOrder = function (root) {
    //二叉树的层序遍历
    let res = [], queue = [];
    queue.push(root);
    if (root === null) {
        return res;
    }
    while (queue.length !== 0) {
        // 记录当前层级节点数
        let length = queue.length;
        //存放每一层的节点 
        let curLevel = [];
        while (length--) {
            let node = queue.shift();
            curLevel.push(node.val);
            // 存放当前层下一层的节点
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }
        //把每一层的结果放到结果数组
        res.push(curLevel);
    }
    return res;
};