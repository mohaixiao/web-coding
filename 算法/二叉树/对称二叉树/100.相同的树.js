// 100.相同的树
// https://leetcode.cn/problems/same-tree/

// 思路：对呀比较对称树，缺少了外部判断root为null的步骤

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
// 思路：放入的是2个树的头节点，不再是一个了
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