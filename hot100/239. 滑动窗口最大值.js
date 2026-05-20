// https://leetcode.cn/problems/sliding-window-maximum/description/?envType=study-plan-v2&envId=top-100-liked

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    const n = nums.length;
    const q = []; // 只存下标，存位置

    // 第一块：凑齐第一个窗口 前3个数
    for (let i = 0; i < k; i++) {
        // 当前数字 >= 队列最后位置的数字，就删掉最后一个
        while (q.length && nums[i] >= nums[q[q.length - 1]]) {
            q.pop();
        }
        q.push(i); // 把当前位置存进去
    }
    // 第一个窗口最大值存起来
    const ans = [nums[q[0]]];


    // 第二块：窗口开始往右滑
    for (let i = k; i < n; i++) {
        // 1. 新来一个数，把队列末尾比它小的全部删掉
        while (q.length && nums[i] >= nums[q[q.length - 1]]) {
            q.pop();
        }
        q.push(i);

        // 2. 删掉已经滑出窗口的最左边旧数
        while (q[0] <= i - k) {
            q.shift();
        }

        // 3. 最左边就是最大值，存入答案
        ans.push(nums[q[0]]);
    }
    return ans;
};

