// https://leetcode.cn/problems/delete-node-in-a-bst/

// 这里就把二叉搜索树中删除节点遇到的情况都搞清楚。

// 有以下五种情况：

// 第一种情况：没找到删除的节点，遍历到空节点直接返回了
// 找到删除的节点
// 第二种情况：左右孩子都为空（叶子节点），直接删除节点， 返回NULL为根节点
// 第三种情况：删除节点的左孩子为空，右孩子不为空，删除节点，右孩子补位，返回右孩子为根节点
// 第四种情况：删除节点的右孩子为空，左孩子不为空，删除节点，左孩子补位，返回左孩子为根节点
// 第五种情况：左右孩子节点都不为空，则将删除节点的左子树头结点（左孩子）放到删除节点的右子树的最左面节点的左孩子上，返回删除节点右孩子为新的根节点。

// https://code-thinking.cdn.bcebos.com/gifs/450.%E5%88%A0%E9%99%A4%E4%BA%8C%E5%8F%89%E6%90%9C%E7%B4%A2%E6%A0%91%E4%B8%AD%E7%9A%84%E8%8A%82%E7%82%B9.gif

// 递归
var deleteNode = function (root, key) {
    if (!root) return null;
    if (key > root.val) {
        root.right = deleteNode(root.right, key);
        return root;
    } else if (key < root.val) {
        root.left = deleteNode(root.left, key);
        return root;
    } else {

        // 场景1: 该节点是叶节点
        if (!root.left && !root.right) {
            return null
        }
        // 场景2: 有一个孩子节点不存在
        if (root.left && !root.right) {
            return root.left;
        } else if (root.right && !root.left) {
            return root.right;
        }
        // 场景3: 左右节点都存在
        const rightNode = root.right;
        // 获取最小值节点 并且顶替要删除的节点
        const minNode = getMinNode(rightNode);
        // 将待删除节点的值替换为最小值节点值
        root.val = minNode.val;
        // 删除最小值节点
        root.right = deleteNode(root.right, minNode.val);
        return root;
    }
};
function getMinNode(root) {
    while (root.left) {
        root = root.left;
    }
    return root;
}

// 迭代
var deleteNode = function (root, key) {
    const deleteOneNode = target => {
        if (!target) return target
        if (!target.right) return target.left
        let cur = target.right
        while (cur.left) {
            cur = cur.left
        }
        cur.left = target.left
        return target.right
    }

    if (!root) return root
    let cur = root
    let pre = null
    while (cur) {
        if (cur.val === key) break
        pre = cur
        cur.val > key ? cur = cur.left : cur = cur.right
    }
    if (!pre) {
        return deleteOneNode(cur)
    }
    if (pre.left && pre.left.val === key) {
        pre.left = deleteOneNode(cur)
    }
    if (pre.right && pre.right.val === key) {
        pre.right = deleteOneNode(cur)
    }
    return root
}