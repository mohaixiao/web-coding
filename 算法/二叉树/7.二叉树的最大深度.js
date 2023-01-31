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

// 559.n叉树的最大深度
// https://leetcode.cn/problems/maximum-depth-of-n-ary-tree/

// N叉树的最大深度 递归写法

var maxDepth = function(root) {
    if(!root) return 0
    let depth = 0
    for(let node of root.children) {
        depth = Math.max(depth, maxDepth(node))
    }
    return depth + 1
}

// N叉树的最大深度 层序遍历

var maxDepth = function(root) {
    if(!root) return 0
    let count = 0
    let queue = [root]
    while(queue.length) {
        let size = queue.length
        count++
        while(size--) {
            let node = queue.shift()
            for (let item of node.children) {
                item && queue.push(item);
            }
        }
    }
    return count
};
