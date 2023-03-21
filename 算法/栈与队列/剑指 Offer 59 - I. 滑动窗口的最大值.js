// https://code-thinking.cdn.bcebos.com/gifs/239.%E6%BB%91%E5%8A%A8%E7%AA%97%E5%8F%A3%E6%9C%80%E5%A4%A7%E5%80%BC.gif

// https://code-thinking.cdn.bcebos.com/gifs/239.%E6%BB%91%E5%8A%A8%E7%AA%97%E5%8F%A3%E6%9C%80%E5%A4%A7%E5%80%BC-2.gif

// https://leetcode.cn/problems/hua-dong-chuang-kou-de-zui-da-zhi-lcof/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
    class MonoQueue {
        queue;
        constructor() {
            this.queue = [];
        }
        enqueue(value) {
            let back = this.queue[this.queue.length - 1]; //队尾
            while (back !== undefined && back < value) {// 队列非空且小于新值
                this.queue.pop(); // 删除队尾
                back = this.queue[this.queue.length - 1]; // 更新队尾
            }
            this.queue.push(value); // 推入新值value
        }
        dequeue(value) {
            let front = this.front(); // 队首
            if (front === value) {
                this.queue.shift(); // 删除队首
            }
        }
        front() {
            return this.queue[0];// 返回队首
        }
    }
    let helperQueue = new MonoQueue(); // 创建队列
    let i = 0, j = 0; //左右滑动指针
    let resArr = [];
    while (j < k) {
        helperQueue.enqueue(nums[j++]); // 第一创建滑动窗口
    }
    resArr.push(helperQueue.front()); // 推入第一个窗口最大值
    while (j < nums.length) {
        helperQueue.enqueue(nums[j]); // 更新队尾
        helperQueue.dequeue(nums[i]); // 判断队首
        resArr.push(helperQueue.front()); // 推入窗口最大值
        i++, j++;
    }
    return resArr[0] != undefined ? resArr : []; //返回数组 防止返回的是[undefined]
};