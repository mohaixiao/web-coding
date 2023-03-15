// https://leetcode.cn/problems/lowest-common-ancestor-of-a-binary-tree/
// https://code-thinking-1253855093.file.myqcloud.com/pics/2021020415105872.png

// 思考：
// 深度遍历 
// 1 节点等于P，Q ，null 直接返回
// 2 递归左右节点
// 左右节点都存在 返回root
// 左右节点缺一个，返回其中存在的那个

var lowestCommonAncestor = function (root, p, q) {
    // 使用递归的方法
    // 需要从下到上，所以使用后序遍历
    // 1. 确定递归的函数
    const travelTree = function (root, p, q) {
        // 2. 确定递归终止条件
        if (root === null || root === p || root === q) {
            return root;
        }
        // 3. 确定递归单层逻辑
        let left = travelTree(root.left, p, q);
        let right = travelTree(root.right, p, q);
        if (left !== null && right !== null) {
            return root;
        }
        if (left === null) {
            return right;
        }
        return left;
    }
    return travelTree(root, p, q);
};