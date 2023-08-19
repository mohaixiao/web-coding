// https://leetcode.cn/problems/cong-wei-dao-tou-da-yin-lian-biao-lcof/?envType=featured-list&envId=xb9nqhhg

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function (head) {
  let arr = [];
  while (head) {
    arr.unshift(head.val);
    head = head.next;
  }
  return arr;
};
