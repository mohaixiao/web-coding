// https://leetcode.cn/problems/sum-of-left-leaves/

// 思路：递归，null 返回0 递归计算左右节点值，如果当前节点的左子节点就是叶子节点就推入。
// 思路：层序遍历，null 返回0 取出节点，如果当前节点的左子节点就是叶子节点就推入，然后再推入节点的左右节点进入战。

// 递归法
var sumOfLeftLeaves = function (root) {
    //采用后序遍历 递归遍历
    // 1. 确定递归函数参数
    const nodesSum = function (node) {
        // 2. 确定终止条件
        if (node === null) {
            return 0;
        }
        let leftValue = nodesSum(node.left);
        let rightValue = nodesSum(node.right);
        // 3. 单层递归逻辑
        let midValue = 0;
        // 找到左子节点进行推入，
        if (node.left && node.left.left === null && node.left.right === null) {
            midValue = node.left.val;
        }
        let sum = midValue + leftValue + rightValue;
        return sum;
    }
    return nodesSum(root);
};

// 迭代法
var sumOfLeftLeaves = function (root) {
    //采用层序遍历
    if (root === null) {
        return null;
    }
    let queue = [];
    let sum = 0;
    queue.push(root);
    while (queue.length) {
        let node = queue.shift();
        // 节点的左子节点是叶子就推入增加
        if (node.left !== null && node.left.left === null && node.left.right === null) {
            sum += node.left.val;
        }
        // 遍历推入子节点
        node.left && queue.push(node.left);
        node.right && queue.push(node.right);
    }
    return sum;
};