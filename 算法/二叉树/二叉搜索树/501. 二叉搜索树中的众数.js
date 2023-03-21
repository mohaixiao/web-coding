// https://leetcode.cn/problems/find-mode-in-binary-search-tree/

// 思路：
// 使用额外空间map的方法
// 使用中旬遍历对map存储val
// 使用for of 遍历不断更新最大值和最新存储节点的数组

var findMode = function (root) {
    // 使用递归中序遍历
    let map = new Map();
    // 1. 确定递归函数以及函数参数
    const traverTree = function (root) {
        // 2. 确定递归终止条件
        if (root === null) {
            return;
        }
        traverTree(root.left);
        // 3. 单层递归逻辑
        map.set(root.val, map.has(root.val) ? map.get(root.val) + 1 : 1);
        traverTree(root.right);
    }
    traverTree(root);
    //上面把数据都存储到map
    //下面开始寻找map里面的
    // 定义一个最大出现次数的初始值为root.val的出现次数
    let maxCount = map.get(root.val);
    // 定义一个存放结果的数组res
    let res = [];
    for (let [key, value] of map) {
        // 如果当前值等于最大出现次数就直接在res增加该值
        if (value === maxCount) {
            res.push(key);
        }
        // 如果value的值大于原本的maxCount就清空res的所有值，因为找到了更大的
        if (value > maxCount) {
            res = [];
            maxCount = value;
            res.push(key);
        }
    }
    return res;
};

// 不使用额外空间，利用二叉树性质，中序遍历(有序)：
var findMode = function (root) {
    // 不使用额外空间，使用中序遍历,设置出现最大次数初始值为1
    let count = 0, maxCount = 1;
    let pre = root, res = [];
    // 1.确定递归函数及函数参数
    const travelTree = function (cur) {
        // 2. 确定递归终止条件
        if (cur === null) {
            return;
        }
        travelTree(cur.left);
        // 3. 单层递归逻辑
        if (pre.val === cur.val) {
            count++;
        } else {
            count = 1;
        }
        pre = cur;
        if (count === maxCount) {
            res.push(cur.val);
        }
        if (count > maxCount) {
            res = [];
            maxCount = count;
            res.push(cur.val);
        }
        travelTree(cur.right);
    }
    travelTree(root);
    return res;
};