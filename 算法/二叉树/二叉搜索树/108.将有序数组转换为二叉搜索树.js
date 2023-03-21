// https://leetcode.cn/problems/convert-sorted-array-to-binary-search-tree/

// 不断中间分割，然后递归处理左区间，右区间，也可以说是分治。
// 思路：
// 取得数组的中间值
// 创建头节点
// 递归创建左右节点

// 递归

var sortedArrayToBST = function (nums) {
    const buildTree = (Arr, left, right) => {
        if (left > right)
            return null;

        let mid = Math.floor(left + (right - left) / 2);

        let root = new TreeNode(Arr[mid]);
        root.left = buildTree(Arr, left, mid - 1);
        root.right = buildTree(Arr, mid + 1, right);
        return root;
    }
    return buildTree(nums, 0, nums.length - 1);
};

// 迭代
// 思路：

var sortedArrayToBST = function (nums) {
    if (nums.length === 0) {
        return null;
    }
    let root = new TreeNode(0);       //初始根节点
    let nodeQue = [root];             //放遍历的节点,并初始化
    let leftQue = [0];                //放左区间的下标,初始化
    let rightQue = [nums.length - 1];   // 放右区间的下标

    while (nodeQue.length) {
        let curNode = nodeQue.pop();
        let left = leftQue.pop();
        let right = rightQue.pop();
        let mid = left + Math.floor((right - left) / 2);

        curNode.val = nums[mid];      //将下标为mid的元素给中间节点

        //         处理左区间
        if (left <= mid - 1) {
            curNode.left = new TreeNode(0);
            nodeQue.push(curNode.left);
            leftQue.push(left);
            rightQue.push(mid - 1);
        }

        //         处理右区间
        if (right >= mid + 1) {
            curNode.right = new TreeNode(0);
            nodeQue.push(curNode.right);
            leftQue.push(mid + 1);
            rightQue.push(right);
        }
    }
    return root;
};
