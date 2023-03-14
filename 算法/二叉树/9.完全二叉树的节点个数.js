// 222. 完全二叉树的节点个数
// https://leetcode.cn/problems/count-complete-tree-nodes/

// 思路： 递归： 设计终止条件为null时返回0 最终返回自己点个数（递归算出来）+ 1
// 思路：设置一个变量记录迭代的个数
// 思路：利用二叉树定义进行递归，每次递归的时候左右子树的高度一样的时候，就可以返回公式Math.pow(2, leftHeight + 1) - 1，不然还是递归countNodes(root.left) + countNodes(root.right) + 1;（左右加本身）。

// 递归版本
var countNodes = function (root) {
    //递归法计算二叉树节点数
    // 1. 确定递归函数参数
    const getNodeSum = function (node) {
        //2. 确定终止条件
        if (node === null) {
            return 0;
        }
        //3. 确定单层递归逻辑
        let leftNum = getNodeSum(node.left);
        let rightNum = getNodeSum(node.right);
        return leftNum + rightNum + 1;
    }
    return getNodeSum(root);
};

// 迭代(层序遍历)版本
var countNodes = function (root) {
    //层序遍历
    let queue = [];
    if (root === null) {
        return 0;
    }
    queue.push(root);
    let nodeNums = 0;
    while (queue.length) {
        let length = queue.length;
        while (length--) {
            let node = queue.shift();
            nodeNums++;
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }
    }
    return nodeNums;
};

// 利用完全二叉树性质
var countNodes = function (root) {
    //利用完全二叉树的特点
    if (root === null) {
        return 0;
    }
    let left = root.left;
    let right = root.right;
    let leftHeight = 0, rightHeight = 0;
    while (left) {
        left = left.left;
        leftHeight++;
    }
    while (right) {
        right = right.right;
        rightHeight++;
    }
    if (leftHeight == rightHeight) {
        return Math.pow(2, leftHeight + 1) - 1;
    }
    return countNodes(root.left) + countNodes(root.right) + 1;
};