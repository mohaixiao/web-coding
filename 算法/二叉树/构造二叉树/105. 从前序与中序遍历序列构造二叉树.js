// https://leetcode.cn/problems/construct-binary-tree-from-preorder-and-inorder-traversal/

// 思路：通过前序遍历找到根节点，然后使用根节点切断中序遍历进行递归
// 步骤
// 1 判断长度null
// 2 从前序遍历的数组中获取中间节点的值， 即数组第一个值
// 3获取中间节点在中序遍历中的下标
//  根据2创建中间节点
// 创建左节点 创建右节点

var buildTree = function (preorder, inorder) {
    if (!preorder.length) return null;
    const rootVal = preorder.shift(); // 从前序遍历的数组中获取中间节点的值， 即数组第一个值
    const index = inorder.indexOf(rootVal); // 获取中间节点在中序遍历中的下标
    const root = new TreeNode(rootVal); // 创建中间节点
    root.left = buildTree(preorder.slice(0, index), inorder.slice(0, index)); // 创建左节点
    root.right = buildTree(preorder.slice(index), inorder.slice(index + 1)); // 创建右节点
    return root;
};