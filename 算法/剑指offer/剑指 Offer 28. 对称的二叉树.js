// https://leetcode.cn/problems/dui-cheng-de-er-cha-shu-lcof/?envType=featured-list&envId=xb9nqhhg

// 101. 对称二叉树
// https://leetcode.cn/problems/symmetric-tree/


// 递归判断是否为对称二叉树：

var isSymmetric = function (root) {
    //使用递归遍历左右子树 递归三部曲
    // 1. 确定递归的参数 root.left root.right和返回值true false 
    const compareNode = function (left, right) {
        //2. 确定终止条件 空的情况
        if ((left === null && right !== null) || (left !== null && right === null)) {
            return false;
        } else if (left === null && right === null) {
            return true;
        } else if (left.val !== right.val) {
            return false;
        }
        //3. 确定单层递归逻辑
        let outSide = compareNode(left.left, right.right);
        let inSide = compareNode(left.right, right.left);
        return outSide && inSide;
    }
    if (root === null) {
        return true;
    }
    return compareNode(root.left, root.right);
};


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


// 100.相同的树

var isSameTree = function (p, q) {
    return compare(p, q)
};

// 递归
function compare(left, right) {
    // 空
    if (left === null && right === null) {
        return true;
    }
    // 一空一有
    if ((left !== null && right === null) || (left === null && right !== null)) return false;
    // 不同
    else if (left.val !== right.val) return false;
    let m = compare(left.left, right.left);
    let n = compare(left.right, right.right);
    return m && n;
}

// 队列迭代
var isSameTree = function (p, q) {
    let queue = [];
    queue.push(p);
    queue.push(q);
    while (queue.length) {
        let left = queue.shift();
        let right = queue.shift();
        if (left === null && right === null) {
            continue;
        }
        if (left === null || right === null || left.val !== right.val) {
            return false;
        }
        queue.push(left.left);//左节点左孩子入队
        queue.push(right.left);//右节点右孩子入队
        queue.push(left.right);//左节点右孩子入队
        queue.push(right.right);//右节点左孩子入队
    }
    return true;
};

// 572. 另一棵树的子树
// https://leetcode.cn/problems/subtree-of-another-tree/

/**
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function (root, subRoot) {
    if (!root) return false
    if (compare(root, subRoot)) return true;
    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};


function compare(left, right) {
    if (left === null && right === null) {
        return true;
    }
    if ((left !== null && right === null) || (left === null && right !== null)) return false;
    else if (left === right === null) return true;
    else if (left.val !== right.val) return false;
    let m = compare(left.left, right.left);
    let n = compare(left.right, right.right);
    return m && n;
}