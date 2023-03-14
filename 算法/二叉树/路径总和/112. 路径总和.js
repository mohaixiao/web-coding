// https://leetcode.cn/problems/path-sum/

// 递归
/**
 * @param {treenode} root
 * @param {number} targetsum
 * @return {boolean}
 */
let haspathsum = function (root, targetsum) {
    // 递归法
    const traversal = (node, cnt) => {
        // 遇到叶子节点，并且计数为0
        if (cnt === 0 && !node.left && !node.right) return true;
        // 遇到叶子节点而没有找到合适的边(计数不为0)，直接返回
        if (!node.left && !node.right) return false;

        //  左（空节点不遍历）.遇到叶子节点返回true，则直接返回true
        if (node.left && traversal(node.left, cnt - node.left.val)) return true;
        //  右（空节点不遍历）  
        if (node.right && traversal(node.right, cnt - node.right.val)) return true;
        return false;
    };
    if (!root) return false;
    return traversal(root, targetsum - root.val);

    // 精简代码:
    // if (!root) return false;
    // if (!root.left && !root.right && targetsum === root.val) return true;
    // return haspathsum(root.left, targetsum - root.val) || haspathsum(root.right, targetsum - root.val);
};

// 迭代
let hasPathSum = function (root, targetSum) {
    if (root === null) return false;
    let nodeArr = [root];
    let valArr = [0];
    while (nodeArr.length) {
        let curNode = nodeArr.shift();
        let curVal = valArr.shift();
        curVal += curNode.val;
        // 为叶子结点，且和等于目标数，返回true
        if (curNode.left === null && curNode.right === null && curVal === targetSum) {
            return true;
        }
        // 左节点，将当前的数值也对应记录下来
        if (curNode.left) {
            nodeArr.push(curNode.left);
            valArr.push(curVal);
        }
        // 右节点，将当前的数值也对应记录下来
        if (curNode.right) {
            nodeArr.push(curNode.right);
            valArr.push(curVal);
        }
    }
    return false;
};