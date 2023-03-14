// https://leetcode.cn/problems/binary-tree-paths/

// 思路：递归的终止条件是到了叶子节点才会终止并且推入res，拼接'->' 。
// 思路：层序遍历法，设置战，和暂存path的数组，以及res的数组。终止条件 到叶子节点终止, 添加路径到结果res中，判断子节点然后

// 递归法：
var binaryTreePaths = function (root) {
    //递归遍历+递归三部曲
    let res = [];
    //1. 确定递归函数 函数参数
    const getPath = function (node, curPath) {
        //2. 确定终止条件，到叶子节点就终止
        if (node.left === null && node.right === null) {
            curPath += node.val;
            res.push(curPath);
            return;
        }
        //3. 确定单层递归逻辑
        curPath += node.val + '->';
        node.left && getPath(node.left, curPath);
        node.right && getPath(node.right, curPath);
    }
    getPath(root, '');
    return res;
};

// 迭代法：
var binaryTreePaths = function (root) {
    if (!root) return [];
    const stack = [root], paths = [''], res = [];
    while (stack.length) {
        const node = stack.pop();
        let path = paths.pop();
        // 终止条件  到叶子节点终止, 添加路径到结果中
        if (!node.left && !node.right) {
            res.push(path + node.val);
            continue;
        }
        // 拼接路径
        path += node.val + '->';
        // 存在节点就多推入一个path
        if (node.right) { // 右节点存在
            stack.push(node.right);
            paths.push(path);
        }
        // 存在节点就多推入一个path 
        if (node.left) { // 左节点存在
            stack.push(node.left);
            paths.push(path);
        }
    }
    return res;
};  