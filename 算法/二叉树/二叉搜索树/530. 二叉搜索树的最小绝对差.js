// https://leetcode.cn/problems/minimum-absolute-difference-in-bst/

// 递归 先转换为有序数组
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
 * @return {number}
 */
var getMinimumDifference = function (root) {
    let arr = [];
    const buildArr = (root) => {
        if (root) {
            buildArr(root.left);
            arr.push(root.val);
            buildArr(root.right);
        }
    }
    buildArr(root);
    let diff = arr[arr.length - 1];
    for (let i = 1; i < arr.length; ++i) {
        if (diff > arr[i] - arr[i - 1])
            diff = arr[i] - arr[i - 1];
    }
    return diff;
};

// 递归 在递归的过程中更新最小值
var getMinimumDifference = function (root) {
    let res = Infinity
    let preNode = null
    // 中序遍历
    const inorder = (node) => {
        if (!node) return
        inorder(node.left)
        // 更新res
        if (preNode) res = Math.min(res, node.val - preNode.val)
        // 记录前一个节点         
        preNode = node
        inorder(node.right)
    }
    inorder(root)
    return res
}

// 迭代 中序遍历
var getMinimumDifference = function (root) {
    let stack = []
    let cur = root
    let res = Infinity
    let pre = null
    while (cur || stack.length) {
        if (cur) {
            stack.push(cur)
            cur = cur.left
        } else {
            cur = stack.pop()
            if (pre) res = Math.min(res, cur.val - pre.val)
            pre = cur
            cur = cur.right
        }
    }
    return res
}

