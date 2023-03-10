// https://leetcode.cn/problems/implement-queue-using-stacks/description/

// https://code-thinking.cdn.bcebos.com/gifs/232.%E7%94%A8%E6%A0%88%E5%AE%9E%E7%8E%B0%E9%98%9F%E5%88%97%E7%89%88%E6%9C%AC2.gif

var MyQueue = function () {
    // 初始化两个栈
    this.stack1 = [];
    this.stack2 = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
    // 直接调度数组的 push 方法
    this.stack1.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
    // 假如 stack2 为空，需要将 stack1 的元素转移进来
    if (this.stack2.length <= 0) {
        // 当 stack1 不为空时，出栈
        while (this.stack1.length !== 0) {
            // 将 stack1 出栈的元素推入 stack2
            this.stack2.push(this.stack1.pop());
        }
    }
    // 为了达到逆序的目的，我们只从 stack2 里出栈元素
    return this.stack2.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
    if (this.stack2.length <= 0) {
        while (this.stack1.length != 0) {
            this.stack2.push(this.stack1.pop());
        }
    }
    const stack2Len = this.stack2.length;
    return this.stack2[stack2Len - 1];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
    return !this.stack1.length && !this.stack2.length
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */