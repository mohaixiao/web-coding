// https://leetcode.cn/problems/remove-element/

// 思路：设置一个k，更新数组长度，在循环遍历数组的时候，遇到不等于val的就k++。

//时间复杂度：O(n)
//空间复杂度：O(1)
var removeElement = (nums, val) => {
    let k = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != val) {
            nums[k++] = nums[i]
        }
    }
    return k;
};