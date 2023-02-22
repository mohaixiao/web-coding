// https://leetcode.cn/problems/reverse-linked-list/
// 203.移除链表元素

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// 双指针：
var reverseList = function (head) {
  // 空结点 单结点
  if (!head || !head.next) return head;
  let temp = null,
    pre = null,
    cur = head;
  while (cur) {
    // 保存next结点，切换cur指向，移动pre，cur。
    temp = cur.next;
    cur.next = pre;
    pre = cur;
    cur = temp;
  }
  // temp = cur = null;
  return pre;
};

// 递归：
var reverse = function (pre, head) {
  if (!head) return pre;
  const temp = head.next;
  head.next = pre;
  pre = head;
  return reverse(pre, temp);
};

var reverseList = function (head) {
  return reverse(null, head);
};

// 递归2
var reverse = function (head) {
  if (!head || !head.next) return head;
  // 从后往前翻
  const pre = reverse(head.next);
  head.next = pre.next;
  pre.next = head;
  return head;
};

var reverseList = function (head) {
  let cur = head;
  while (cur && cur.next) {
    cur = cur.next;
  }
  reverse(head);
  return cur;
};
