// https://leetcode.cn/problems/path-sum-ii/

// https://code-thinking-1253855093.file.myqcloud.com/pics/20210203160922745.png

// 思路：不用返回值，递归函数使用root,值，path数组路径。
// 步骤：
// 空root 直接返回res 空数组
// 1. 遇到了叶子节点且找到了和为sum的路径 res数组存储path
// 2. 遇到叶子节点而没有找到合适的边，直接返回
// 3. 先递归左节点，path路径递归前添加当前左节点的值，然后递归，地柜完毕之后就会回溯path路径，未来可以递归右节点
// 4.和左节点一样的步骤 path 添加，递归 path 回溯。 


// 递归
let pathsum = function (root, targetsum) {
    // 递归法
    // 要遍历整个树找到所有路径，所以递归函数不需要返回值, 与112不同
    const res = [];
    const travelsal = (node, cnt, path) => {
        // 遇到了叶子节点且找到了和为sum的路径
        if (cnt === 0 && !node.left && !node.right) {
            res.push([...path]); // 不能写res.push(path), 要深拷贝
            return;
        }
        if (!node.left && !node.right) return; // 遇到叶子节点而没有找到合适的边，直接返回
        // 左 （空节点不遍历）
        if (node.left) {
            path.push(node.left.val);
            travelsal(node.left, cnt - node.left.val, path); // 递归
            path.pop(); // 回溯
        }
        // 右 （空节点不遍历）
        if (node.right) {
            path.push(node.right.val);
            travelsal(node.right, cnt - node.right.val, path); // 递归
            path.pop(); // 回溯
        }
        return;
    };
    if (!root) return res;
    travelsal(root, targetsum - root.val, [root.val]); // 把根节点放进路径
    return res;
};

// 递归 精简版
var pathsum = function (root, targetsum) {
    //递归方法
    let respath = [], curpath = [];
    // 1. 确定递归函数参数
    const traveltree = function (node, count) {
        curpath.push(node.val);
        count -= node.val;
        // 终止递归
        if (node.left === null && node.right === null && count === 0) {
            respath.push([...curpath]);
        }
        // 递归
        node.left && traveltree(node.left, count);
        node.right && traveltree(node.right, count);
        // 回溯
        let cur = curpath.pop();
        count -= cur;
    }
    // 空root
    if (root === null) {
        return respath;
    }
    travelTree(root, targetSum);
    return resPath;
};


// 思路：设置3个数组分别存储节点，路径，val累计和
// 步骤：
// 空root 直接返回res 空数组
// 1. 取出当前节点，当前累计和，当前路径
// 2. 和val累计,存储路径
// 3. 为叶子结点，且和等于目标数，将此次结果数组push进返回数组中
// 4.左节点，将当前的和及对应路径也对应记录下来
// 5.右节点，将当前的和及对应路径也对应记录下来

// 迭代
let pathSum = function (root, targetSum) {
    if (root === null) return [];
    let nodeArr = [root];
    let resArr = []; // 记录符合目标和的返回路径
    let tempArr = [[]]; // 对应路径
    let countArr = [0]; //对应和
    while (nodeArr.length) {
        // 取出当前节点，当前累计和，当前路径
        let curNode = nodeArr.shift();
        let curVal = countArr.shift();
        let curNodeArr = tempArr.shift();
        // 和累计，
        curVal += curNode.val;
        // 存储路径
        curNodeArr.push(curNode.val);
        // 为叶子结点，且和等于目标数，将此次结果数组push进返回数组中
        if (curNode.left === null && curNode.right === null && curVal === targetSum) {
            resArr.push(curNodeArr);
        }
        // 左节点，将当前的和及对应路径也对应记录下来
        if (curNode.left) {
            nodeArr.push(curNode.left);
            countArr.push(curVal);
            tempArr.push([...curNodeArr]);
        }
        // 右节点，将当前的和及对应路径也对应记录下来
        if (curNode.right) {
            nodeArr.push(curNode.right);
            countArr.push(curVal);
            tempArr.push([...curNodeArr]);
        }
    }
    return resArr;
};