// https://leetcode.cn/problems/implement-stack-using-queues/

// https://code-thinking.cdn.bcebos.com/gifs/225.%E7%94%A8%E9%98%9F%E5%88%97%E5%AE%9E%E7%8E%B0%E6%A0%88.gif
// 使用两个队列实现
/**
 * Initialize your data structure here.
 */
var MyStack = function () {
    this.queue1 = [];
    this.queue2 = [];
};

/**
 * Push element x onto stack. 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
    this.queue1.push(x);
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function () {
    // 减少两个队列交换的次数， 只有当queue1为空时，交换两个队列
    if (!this.queue1.length) {
        [this.queue1, this.queue2] = [this.queue2, this.queue1];
    }
    while (this.queue1.length > 1) {
        this.queue2.push(this.queue1.shift());
    }
    return this.queue1.shift();
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function () {
    // 删除后又加进去
    const x = this.pop();
    this.queue1.push(x);
    return x;
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
    return !this.queue1.length && !this.queue2.length;
};



// 使用一个队列实现
/**
 * Initialize your data structure here.
 */
var MyStack = function () {
    this.queue = [];
};

/**
 * Push element x onto stack. 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
    this.queue.push(x);
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function () {
    let size = this.queue.length;
    while (size-- > 1) {
        this.queue.push(this.queue.shift());
    }
    return this.queue.shift();
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function () {
    const x = this.pop();
    this.queue.push(x);
    return x;
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
    return !this.queue.length;
};