// https://leetcode.cn/problems/insert-into-a-binary-search-tree/
// https://code-thinking.cdn.bcebos.com/gifs/701.%E4%BA%8C%E5%8F%89%E6%90%9C%E7%B4%A2%E6%A0%91%E4%B8%AD%E7%9A%84%E6%8F%92%E5%85%A5%E6%93%8D%E4%BD%9C.gif

// 思路：
// 深度遍历，遇到空节点就创建对应节点返回
// 更具节点值判断选择那一科树进行递归

// 有返回值的递归写法
var insertIntoBST = function (root, val) {
    const setInOrder = (root, val) => {
        if (root === null) {
            let node = new TreeNode(val);
            return node;
        }
        if (root.val > val)
            root.left = setInOrder(root.left, val);
        else if (root.val < val)
            root.right = setInOrder(root.right, val);
        return root;
    }
    return setInOrder(root, val);
};

// 无返回值的递归
// 思路： 设置变量保存子节点需要接上去的parent节点

var insertIntoBST = function (root, val) {
    let parent = new TreeNode(0);
    const preOrder = (cur, val) => {
        if (cur === null) {
            let node = new TreeNode(val);
            if (parent.val > val)
                parent.left = node;
            else
                parent.right = node;
            return;
        }
        parent = cur;
        if (cur.val > val)
            preOrder(cur.left, val);
        if (cur.val < val)
            preOrder(cur.right, val);
    }
    if (root === null)
        root = new TreeNode(val);
    preOrder(root, val);
    return root;
};