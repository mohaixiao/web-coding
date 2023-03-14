// 111. 二叉树的最小深度
// https://leetcode.cn/problems/minimum-depth-of-binary-tree/

// 思路：层序遍历，内部for循环的时候，遇到叶子节点就直接返回当前的deep。
// 思路：递归遍历，

// 迭代法：
var minDepth = function (root) {
    //二叉树的层序遍历
    const queue = [];
    queue.push(root);
    let deep = 0;
    if (!root) return root;
    while (queue.length) {
        deep++;
        // 记录当前层级节点数
        let len = queue.length;
        for (let i = 0; i < len; i++) {
            let node = queue.shift();
            // 是叶子节点就返回
            if (!node.left && !node.right) return deep;
            // 存放当前层下一层的节点
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }
    }
    return deep;
};

// 递归法：
/**
    * @param {TreeNode} root
    * @return {number}
    */
var minDepth1 = function (root) {
    if (!root) return 0;
    // 到叶子节点 返回 1
    if (!root.left && !root.right) return 1;
    // 只有右节点时 递归右节点
    if (!root.left) return 1 + minDepth(root.right);
    // 只有左节点时 递归左节点
    if (!root.right) return 1 + minDepth(root.left);
    return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
};