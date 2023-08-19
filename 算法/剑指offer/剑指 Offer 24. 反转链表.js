// https://leetcode.cn/problems/fan-zhuan-lian-biao-lcof/description/?envType=featured-list&envId=xb9nqhhg

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let p1 = head;
  let p2 = null;
  while (p1) {
    const temp = p1.next;
    p1.next = p2;
    p2 = p1;
    p1 = temp;
  }
  return p2;
};
