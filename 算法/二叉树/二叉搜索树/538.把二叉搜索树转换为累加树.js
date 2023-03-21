// https://leetcode.cn/problems/convert-bst-to-greater-tree/

// 思路：使用倒序遍历进行累加
// 右中左 递归

// 递归
var convertBST = function (root) {
    // 待累加的值
    let pre = 0;
    const ReverseInOrder = (cur) => {
        // 节点存在
        if (cur) {
            // 递归右节点
            ReverseInOrder(cur.right);
            // 累加r节点
            cur.val += pre;
            // 更新pre
            pre = cur.val;
            // 递归左节点
            ReverseInOrder(cur.left);
        }
    }
    // 调用
    ReverseInOrder(root);
    return root;
};

// 思路：使用数组先存储全部右节点，
// 之后取出来，
// 然后累加pre值，
// 在更新pre，在变更左节点

// 迭代
var convertBST = function (root) {
    let pre = 0;
    let cur = root;
    let stack = [];
    while (cur !== null || stack.length !== 0) {
        while (cur !== null) {
            stack.push(cur);
            cur = cur.right;
        }
        cur = stack.pop();
        cur.val += pre;
        pre = cur.val;
        cur = cur.left;
    }
    return root;
};
