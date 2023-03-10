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