// 222. 完全二叉树的节点个数
// https://leetcode.cn/problems/count-complete-tree-nodes/


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
    let leftDepth = 0, rightDepth = 0;
    while (left) {
        left = left.left;
        leftDepth++;
    }
    while (right) {
        right = right.right;
        rightDepth++;
    }
    if (leftDepth == rightDepth) {
        return Math.pow(2, leftDepth + 1) - 1;
    }
    return countNodes(root.left) + countNodes(root.right) + 1;
};

