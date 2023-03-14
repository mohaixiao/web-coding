// https://leetcode.cn/problems/construct-binary-tree-from-inorder-and-postorder-traversal/

// 思路：通过前序遍历找到根节点，然后使用根节点切断中序遍历进行递归
// 步骤
// 1 判断长度null
// 2 从后序遍历的数组中获取中间节点的值， 即数组最后一个值
// 3获取中间节点在中序遍历中的下标
//  根据2创建中间节点
// 创建左节点 创建右节点

var buildTree = function (inorder, postorder) {
    if (!inorder.length) return null;
    const rootVal = postorder.pop(); // 从后序遍历的数组中获取中间节点的值， 即数组最后一个值
    let rootIndex = inorder.indexOf(rootVal); // 获取中间节点在中序遍历中的下标
    const root = new TreeNode(rootVal); // 创建中间节点
    root.left = buildTree(inorder.slice(0, rootIndex), postorder.slice(0, rootIndex)); // 创建左节点
    root.right = buildTree(inorder.slice(rootIndex + 1), postorder.slice(rootIndex)); // 创建右节点
    return root;
};