// 101. 对称二叉树
// https://leetcode.cn/problems/symmetric-tree/

// 思路：使用递归，先判断root是否为null，在写递归函数判断腿缺，无，不一样大的情况，然后递归执行传入对称的腿

// 递归判断是否为对称二叉树：
var isSymmetric = function (root) {
    //使用递归遍历左右子树 递归三部曲
    // 1. 确定递归的参数 root.left root.right和返回值true false 
    const compareNode = function (left, right) {
        //2. 确定终止条件 空的情况
        // 半条腿
        if ((left === null && right !== null) || (left !== null && right === null)) {
            return false;
        } else if (left === null && right === null) { // 没有腿
            return true;
        } else if (left.val !== right.val) { // 腿不一样大
            return false;
        }
        //3. 确定单层递归逻辑 左左右右
        let outSide = compareNode(left.left, right.right);
        let inSide = compareNode(left.right, right.left);
        return outSide && inSide;
    }
    if (root === null) {
        return true;
    }
    return compareNode(root.left, root.right);
};

// 思路： 层序遍历， 先判断root是否null 直接返回，然后层序遍历 取出要判断的2个节点，先判断是否为null，在判断是否单个瘸腿或者不一样大，循环的对称的推入子节点，左左右右。
// 队列实现迭代判断是否为对称二叉树：
var isSymmetric = function (root) {
    //迭代方法判断是否是对称二叉树
    //首先判断root是否为空
    if (root === null) {
        return true;
    }
    let queue = [];
    queue.push(root.left);
    queue.push(root.right);
    while (queue.length) {
        let leftNode = queue.shift();//左节点
        let rightNode = queue.shift();//右节点
        if (leftNode === null && rightNode === null) {
            continue;
        }
        if (leftNode === null || rightNode === null || leftNode.val !== rightNode.val) {
            return false;
        }
        queue.push(leftNode.left);//左节点左孩子入队
        queue.push(rightNode.right);//右节点右孩子入队
        queue.push(leftNode.right);//左节点右孩子入队
        queue.push(rightNode.left);//右节点左孩子入队
    }
    return true;
};

// 也是层序遍历
// 栈实现迭代判断是否为对称二叉树：
var isSymmetric = function (root) {
    //迭代方法判断是否是对称二叉树
    //首先判断root是否为空
    if (root === null) {
        return true;
    }
    let stack = [];
    stack.push(root.left);
    stack.push(root.right);
    while (stack.length) {
        let rightNode = stack.pop(); //右节点
        let leftNode = stack.pop(); //左节点
        if (leftNode === null && rightNode === null) {
            continue;
        }
        if (leftNode === null || rightNode === null || leftNode.val !== rightNode.val) {
            return false;
        }
        stack.push(leftNode.left);//左节点左孩子入队
        stack.push(rightNode.right);//右节点右孩子入队
        stack.push(leftNode.right);//左节点右孩子入队
        stack.push(rightNode.left);//右节点左孩子入队
    }
    return true;
};