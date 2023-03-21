// https://leetcode.cn/problems/trim-a-binary-search-tree/

// 迭代：

var trimBST = function (root, low, high) {
    if (root === null) {
        return null;
    }
    while (root !== null && (root.val < low || root.val > high)) {
        if (root.val < low) {
            root = root.right;
        } else {
            root = root.left;
        }
    }
    let cur = root;
    while (cur !== null) {
        while (cur.left && cur.left.val < low) {
            cur.left = cur.left.right;
        }
        cur = cur.left;
    }
    cur = root;
    //判断右子树大于high的情况
    while (cur !== null) {
        while (cur.right && cur.right.val > high) {
            cur.right = cur.right.left;
        }
        cur = cur.right;
    }
    return root;
};


// 递归：
// 思路：
// 节点为0 直接返回
// 节点值小于low，舍弃该节点，直接返回递归判断该右子节点
// 节点值大于high，舍弃该节点，直接返回递归判断该左子节点

var trimBST = function (root, low, high) {
    if (root === null) {
        return null;
    }
    if (root.val < low) {
        let right = trimBST(root.right, low, high);
        return right;
    }
    if (root.val > high) {
        let left = trimBST(root.left, low, high);
        return left;
    }
    root.left = trimBST(root.left, low, high);
    root.right = trimBST(root.right, low, high);
    return root;
}