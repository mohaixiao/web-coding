// https://leetcode.cn/problems/yong-liang-ge-zhan-shi-xian-dui-lie-lcof/?envType=featured-list&envId=xb9nqhhg

var CQueue = function () {
  this.stackIn = [];
  this.stackOut = [];
};

/**
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function (value) {
  this.stackIn.push(value);
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function () {
  if (
    this.stackIn.length === this.stackOut.length &&
    this.stackOut.length === 0
  ) {
    return -1;
  }

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
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */
