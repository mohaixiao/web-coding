// https://leetcode.cn/problems/balanced-binary-tree/

// 思路：

// 递归法：
var isBalanced = function (root) {
    //还是用递归三部曲 + 后序遍历 左右中 当前左子树右子树高度相差大于1就返回-1
    // 1. 确定递归函数参数以及返回值
    const getDepth = function (node) {
        // 2. 确定递归函数终止条件
        if (node === null) return 0;
        // 3. 确定单层递归逻辑
        let leftDepth = getDepth(node.left); //左子树高度
        // 当判定左子树不为平衡二叉树时,即可直接返回-1
        if (leftDepth === -1) return -1;
        let rightDepth = getDepth(node.right); //右子树高度
        // 当判定右子树不为平衡二叉树时,即可直接返回-1
        if (rightDepth === -1) return -1;
        if (Math.abs(leftDepth - rightDepth) > 1) {
            return -1;
        } else {
            return 1 + Math.max(leftDepth, rightDepth);
        }
    }
    return !(getDepth(root) === -1);
};

// 迭代法：
// 获取当前节点的高度
var getHeight = function (curNode) {
    let queue = [];
    if (curNode !== null) queue.push(curNode); // 压入当前元素
    let depth = 0, res = 0;
    while (queue.length) {
        let node = queue[queue.length - 1]; // 取出栈顶
        if (node !== null) {
            queue.pop();
            queue.push(node);   // 中
            queue.push(null);
            depth++;
            node.right && queue.push(node.right);   // 右
            node.left && queue.push(node.left);     // 左
        } else {
            queue.pop();
            node = queue[queue.length - 1];
            queue.pop();
            depth--;
        }
        res = res > depth ? res : depth;
    }
    return res;
}
var isBalanced = function (root) {
    if (root === null) return true;
    let queue = [root];
    while (queue.length) {
        let node = queue[queue.length - 1]; // 取出栈顶
        queue.pop();
        if (Math.abs(getHeight(node.left) - getHeight(node.right)) > 1) {
            return false;
        }
        node.right && queue.push(node.right);
        node.left && queue.push(node.left);
    }
    return true;
};