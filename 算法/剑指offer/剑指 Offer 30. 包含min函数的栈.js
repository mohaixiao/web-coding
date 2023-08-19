// https://leetcode.cn/problems/bao-han-minhan-shu-de-zhan-lcof/?envType=featured-list&envId=xb9nqhhg
// https://www.bilibili.com/video/BV1oV4y1j7An/?spm_id_from=333.788&vd_source=037b856144283671f89f562ed7eeb263
/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this.stackA = [];
  this.stackB = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
    // 栈为空且栈顶元素大于x
  if (this.stackB.length == 0 || this.stackB[this.stackB.length - 1] >= x) {
    this.stackB.push(x);
  }
  this.stackA.push(x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  if (
    this.stackA[this.stackA.length - 1] == this.stackB[this.stackB.length - 1]
  ) {
    this.stackA.pop();
    return this.stackB.pop();
  } else {
    return this.stackA.pop();
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stackA[this.stackA.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.min = function () {
  return this.stackB[this.stackB.length - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.min()
 */
