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