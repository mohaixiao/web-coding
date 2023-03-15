// https://leetcode.cn/problems/lowest-common-ancestor-of-a-binary-search-tree/

// 思考：
// 深度遍历 
// 1 节点等于null 直接返回
// 2 根据节点的值判断是否只需要遍历左右子树之间的一个


// 递归法：
var lowestCommonAncestor = function (root, p, q) {
    // 使用递归的方法
    // 1. 使用给定的递归函数lowestCommonAncestor
    // 2. 确定递归终止条件
    if (root === null) {
        return root;
    }
    if (root.val > p.val && root.val > q.val) {
        // 向左子树查询
        let left = lowestCommonAncestor(root.left, p, q);
        return left !== null && left;
    }
    if (root.val < p.val && root.val < q.val) {
        // 向右子树查询
        let right = lowestCommonAncestor(root.right, p, q);
        return right !== null && right;
    }
    return root;
};

// root 为null 直接返回
// 根据root的值和子节点的值进行遍历不断更新root的值


// 迭代法
var lowestCommonAncestor = function (root, p, q) {
    // 使用迭代的方法
    while (root) {
        if (root.val > p.val && root.val > q.val) {
            root = root.left;
        } else if (root.val < p.val && root.val < q.val) {
            root = root.right;
        } else {
            return root;
        }

    }
    return null;
};