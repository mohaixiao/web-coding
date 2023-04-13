// https://leetcode.cn/problems/linked-list-cycle-ii/
// https://code-thinking.cdn.bcebos.com/gifs/142.%E7%8E%AF%E5%BD%A2%E9%93%BE%E8%A1%A8II%EF%BC%88%E6%B1%82%E5%85%A5%E5%8F%A3%EF%BC%89.gif
// 两种循环实现方式
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 先判断是否是环形链表
var detectCycle = function (head) {
  // 空单
  if (!head || !head.next) return null;
  // 快慢节点
  let slow = head.next,
    fast = head.next.next;
  ß;
  // fast 走2步， slow 走1步
  while (fast && fast.next && fast !== slow) {
    slow = slow.next;
    fast = fast.next.next;
  }
  // 走完判断 是否存在
  if (!fast || !fast.next) return null;
  // slow == fast 开始查找环开始点
  slow = head;
  while (fast !== slow) {
    slow = slow.next;
    fast = fast.next;
  }
  return slow;
};

// 推荐这个写法
var detectCycle = function (head) {
  // 空单
  if (!head || !head.next) return null;
  // 快慢节点
  let slow = head.next,
    fast = head.next.next;
  // 
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    // slow == fast 开始查找环开始点
    if (fast == slow) {
      slow = head;
      while (fast !== slow) {
        slow = slow.next;
        fast = fast.next;
      }
      return slow;
    }
  }
  return null;
};
