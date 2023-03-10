// 515. 在每个树行中找最大值
// https://leetcode.cn/problems/find-largest-value-in-each-tree-row/description/
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
var largestValues = function (root) {
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
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }
        //把每一层的结果放到结果数组
        let max = cur.reduce((a, b) => Math.max(a, b))
        res.push(max);
    }
    return res
};

// 116. 填充每个节点的下一个右侧节点指针
// https://leetcode.cn/problems/populating-next-right-pointers-in-each-node/
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
var connect = function (root) {
    //二叉树的层序遍历
    const queue = [];
    queue.push(root);
    if (!root) return root;
    while (queue.length) {
        // 记录当前层级节点数
        let len = queue.length;
        for (let i = 0; i < len; i++) {
            let node = queue.shift();
            // 每层最后节点就赋值null
            if (i + 1 == len) {
                node.next = null;
            } else {
                node.next = queue[0];
            }
            // 存放当前层下一层的节点
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }
    }
    return root
};