// https://code-thinking.cdn.bcebos.com/gifs/232.%E7%94%A8%E6%A0%88%E5%AE%9E%E7%8E%B0%E9%98%9F%E5%88%97%E7%89%88%E6%9C%AC2.gif

// 使用两个数组的栈方法（push, pop） 实现队列
/**
* Initialize your data structure here.
*/
var MyQueue = function () {
    this.stackIn = [];
    this.stackOut = [];
};

/**
* Push element x to the back of queue. 
* @param {number} x
* @return {void}
*/
MyQueue.prototype.push = function (x) {
    this.stackIn.push(x);
};

/**
* Removes the element from in front of queue and returns that element.
* @return {number}
*/
MyQueue.prototype.pop = function () {
    const size = this.stackOut.length;
    if (size) {
        return this.stackOut.pop();
    }
    while (this.stackIn.length) {
        this.stackOut.push(this.stackIn.pop());
    }
    return this.stackOut.pop();
};

/**
* Get the front element.
* @return {number}
*/
MyQueue.prototype.peek = function () {
    const x = this.pop();
    this.stackOut.push(x);
    return x;
};

/**
* Returns whether the queue is empty.
* @return {boolean}
*/
MyQueue.prototype.empty = function () {
    return !this.stackIn.length && !this.stackOut.length
};