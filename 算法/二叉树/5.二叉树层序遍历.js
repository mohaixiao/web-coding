// 102 https://leetcode.cn/problems/binary-tree-level-order-traversal/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    //二叉树的层序遍历
    let res = [], queue = [];
    queue.push(root);
    if (root === null) {
        return res;
    }
    while (queue.length !== 0) {
        // 记录当前层级节点数
        let length = queue.length;
        //存放每一层的节点 
        let curLevel = [];
        while (length--) {
            let node = queue.shift();
            curLevel.push(node.val);
            // 存放当前层下一层的节点
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }
        //把每一层的结果放到结果数组
        res.push(curLevel);
    }
    return res;
};

// 107 https://leetcode.cn/problems/binary-tree-level-order-traversal-ii/

var levelOrderBottom = function (root) {
    let res = [], queue = [];
    queue.push(root);
    while (queue.length && root !== null) {
        // 存放当前层级节点数组
        let curLevel = [];
        // 计算当前层级节点数量
        let length = queue.length;
        while (length--) {
            let node = queue.shift();
            // 把当前层节点存入curLevel数组
            curLevel.push(node.val);
            // 把下一层级的左右节点存入queue队列
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }
        // 从数组前头插入值，避免最后反转数组，减少运算时间
        res.unshift(curLevel);
    }
    return res;
};

// 199 https://leetcode.cn/problems/binary-tree-right-side-view/

var rightSideView = function (root) {
    //二叉树的层序遍历
    let res = [], queue = [];
    queue.push(root);
    if (root === null) {
        return res;
    }
    while (queue.length !== 0) {
        // 记录当前层级节点数
        let length = queue.length;
        //存放每一层的节点 
        let curLevel = [];
        for (let i = 0; i < length; i++) {
            let node = queue.shift();
            curLevel.push(node.val);
            // 存放当前层下一层的节点
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }
        //把每一层的结果放到结果数组
        res.push(curLevel.pop());
    }
    return res;
};

var rightSideView = function (root) {
    //二叉树右视图 只需要把每一层最后一个节点存储到res数组
    let res = [], queue = [];
    queue.push(root);

    while (queue.length && root !== null) {
        // 记录当前层级节点个数
        let length = queue.length;
        while (length--) {
            let node = queue.shift();
            // length长度为0的时候表明到了层级最后一个节点
            if (!length) {
                res.push(node.val);
            }
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }
    }

    return res;
};

// 637 https://leetcode.cn/problems/average-of-levels-in-binary-tree/

var averageOfLevels = function (root) {
    //层级平均值
    let res = [], queue = [];
    queue.push(root);

    while (queue.length && root !== null) {
        //每一层节点个数
        let length = queue.length;
        //sum记录每一层的和
        let sum = 0;
        for (let i = 0; i < length; i++) {
            let node = queue.shift();
            sum += node.val;
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }
        //每一层的平均值存入数组res
        res.push(sum / length);
    }

    return res;
};

// 429
// https://leetcode.cn/problems/n-ary-tree-level-order-traversal/
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    //二叉树的层序遍历
    const queue = [];
    const res = [];
    queue.push(root);
    if (!root) return res;
    while (queue.length) {
        // 记录当前层级节点数
        let len = queue.length;
        //存放每一层的节点 
        let cur = []
        for (let i = 0; i < len; i++) {
            let node = queue.shift();
            cur.push(node.val)
            // 存放当前层下一层的节点
            for (const child of node.children) {
                queue.push(child);
            }
        }
        //把每一层的结果放到结果数组
        res.push(cur);
    }
    return res
};

// 515. 在每个树行中找最大值
// https://leetcode.cn/problems/find-largest-value-in-each-tree-row/description/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValues = function (root) {
    //二叉树的层序遍历
    const queue = [];
    const res = [];
    queue.push(root);
    if (!root) return res;
    while (queue.length) {
        // 记录当前层级节点数
        let len = queue.length;
        //存放每一层的节点 
        let cur = []
        for (let i = 0; i < len; i++) {
            let node = queue.shift();
            cur.push(node.val)
            // 存放当前层下一层的节点
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }
        //把每一层的结果放到结果数组
        let max = cur.reduce((a, b) => Math.max(a, b))
        res.push(max);
    }
    return res
};

// 116. 填充每个节点的下一个右侧节点指针
// https://leetcode.cn/problems/populating-next-right-pointers-in-each-node/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var connect = function (root) {
    //二叉树的层序遍历
    const queue = [];
    queue.push(root);
    if (!root) return root;
    while (queue.length) {
        // 记录当前层级节点数
        let len = queue.length;
        for (let i = 0; i < len; i++) {
            let node = queue.shift();
            // 每层最后节点就赋值null
            if (i + 1 == len) {
                node.next = null;
            } else {
                node.next = queue[0];
            }
            // 存放当前层下一层的节点
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }
    }
    return root
};

// 117. 填充每个节点的下一个右侧节点指针 II
// https://leetcode.cn/problems/populating-next-right-pointers-in-each-node-ii/

/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
    //二叉树的层序遍历
    const queue = [];
    queue.push(root);
    if (!root) return root;
    while (queue.length) {
        // 记录当前层级节点数
        let len = queue.length;
        for (let i = 0; i < len; i++) {
            let node = queue.shift();
            if (i + 1 == len) {
                node.next = null;
            } else {
                node.next = queue[0];
            }
            // 存放当前层下一层的节点
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }
    }
    return root
};

// 104.二叉树的最大深度
// https://leetcode.cn/problems/maximum-depth-of-binary-tree/
var maxDepth = function (root) {
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
            // 存放当前层下一层的节点
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }
    }
    return deep;
};


// 递归
var maxdepth = function (root) {
    //使用递归的方法 递归三部曲
    //1. 确定递归函数的参数和返回值
    const getdepth = function (node) {
        //2. 确定终止条件
        if (node === null) {
            return 0;
        }
        //3. 确定单层逻辑
        let leftdepth = getdepth(node.left);
        let rightdepth = getdepth(node.right);
        let depth = 1 + Math.max(leftdepth, rightdepth);
        return depth;
    }
    return getdepth(root);
};

var maxdepth = function (root) {
    if (root === null) return 0;
    return 1 + Math.max(maxdepth(root.left), maxdepth(root.right))
};

// 111. 二叉树的最小深度
// https://leetcode.cn/problems/minimum-depth-of-binary-tree/

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