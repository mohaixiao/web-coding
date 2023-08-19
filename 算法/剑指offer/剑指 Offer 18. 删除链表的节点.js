// https://leetcode.cn/problems/shan-chu-lian-biao-de-jie-dian-lcof/description/?envType=featured-list&envId=xb9nqhhg

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function (head, val) {
  if (head.val === val) {
    return head.next;
  }
  let pre = head;
  let cur = head.next;
  while (cur) {
    if (cur.val === val) {
      pre.next = cur.next;
    }
    pre = cur;
    cur = cur.next;
  }
  return head;
};
