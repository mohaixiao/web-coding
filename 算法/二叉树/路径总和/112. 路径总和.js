// https://leetcode.cn/problems/path-sum/

// https://code-thinking-1253855093.file.myqcloud.com/pics/2021020316051216.png

// 思路：递归递减目标值，直到为0并且为叶子节点。
// 步骤：
// root为null
// 1 遇到叶子节点，并且计数为0。
// 2 遇到叶子节点而没有找到合适的边(计数不为0)，直接返回
// 3左（空节点不遍历）遇到叶子节点返回true，则直接返回true
// 4右（空节点不遍历） 遇到叶子节点返回true，则直接返回true

// 迭代：思路：
// 设置2个数组分别存储val总和，和子节点
// 步骤
// 使用层序遍历进行遍历，取出节点，值，值累计之后判断
// 然后遇到叶子节点并且val相等就直接true
// 有子节点就推入数组，并且值也要推入对应数组


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