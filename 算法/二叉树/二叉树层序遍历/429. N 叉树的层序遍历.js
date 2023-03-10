
// 429
// https://leetcode.cn/problems/n-ary-tree-level-order-traversal/
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    //二叉树的层序遍历
    const queue = [];
    const res = [];
    queue.push(root);
    if (!root) return res;
    while (queue.length) {
        // 记录当前层级节点数
        let len = queue.length;
        //存放每一层的节点 
        let cur = []
        for (let i = 0; i < len; i++) {
            let node = queue.shift();
            cur.push(node.val)
            // 存放当前层下一层的节点
            for (const child of node.children) {
                queue.push(child);
            }
        }
        //把每一层的结果放到结果数组
        res.push(cur);
    }
    return res
};