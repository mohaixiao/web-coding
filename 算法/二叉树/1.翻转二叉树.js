// https://leetcode.cn/problems/invert-binary-tree/description/

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
 * @return {TreeNode}
 */

// 递归法

// 第一种从根往子节点递归处理
var invertTree = function (root) {
    if (root == null) return root;
    [root.left, root.right] = [root.right, root.left];
    invertTree(root.left);
    invertTree(root.right);
    return root
};

// 先处理子节点，利用递归回溯结果
var invertTree = function (root) {
    if (root == null) return root;
    let left = invertTree(root.left);
    let right = invertTree(root.right);
    root.left = right;
    root.right = left;
    return root
};

// 使用递归版本的前序遍历
git
var invertTree = function (root) {
    //1. 首先使用递归版本的前序遍历实现二叉树翻转
    //交换节点函数
    const inverNode = function (left, right) {
        let temp = left;
        left = right;
        right = temp;
        //需要重新给root赋值一下
        root.left = left;
        root.right = right;
    }
    //确定递归函数的参数和返回值inverTree=function(root)
    //确定终止条件
    if (root === null) {
        return root;
    }
    //确定节点处理逻辑 交换
    inverNode(root.left, root.right);
    invertTree(root.left);
    invertTree(root.right);
    return root;
};

// 使用层序遍历：

var invertTree = function (root) {
    //我们先定义节点交换函数
    const invertNode = function (root, left, right) {
        let temp = left;
        left = right;
        right = temp;
        root.left = left;
        root.right = right;
    }
    //使用层序遍历
    let queue = [];
    if (root === null) {
        return root;
    }
    queue.push(root);
    while (queue.length) {
        let length = queue.length;
        while (length--) {
            let node = queue.shift();
            //节点处理逻辑
            invertNode(node, node.left, node.right);
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }
    }
    return root;
};



// 使用迭代版本(统一模板)) 的前序遍历：

var invertTree = function (root) {
    //我们先定义节点交换函数
    const invertNode = function (root, left, right) {
        let temp = left;
        left = right;
        right = temp;
        root.left = left;
        root.right = right;
    }
    //使用迭代方法的前序遍历 
    let stack = [];
    if (root === null) {
        return root;
    }
    stack.push(root);
    while (stack.length) {
        let node = stack.pop();
        if (node !== null) {
            //前序遍历顺序中左右  入栈顺序是前序遍历的倒序右左中
            node.right && stack.push(node.right);
            node.left && stack.push(node.left);
            stack.push(node);
            stack.push(null);
        } else {
            node = stack.pop();
            //节点处理逻辑
            invertNode(node, node.left, node.right);
        }
    }
    return root;
};