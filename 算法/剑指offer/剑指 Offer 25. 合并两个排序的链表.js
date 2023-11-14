// https://leetcode.cn/problems/he-bing-liang-ge-pai-xu-de-lian-biao-lcof/?envType=featured-list&envId=xb9nqhhg

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  let p = new ListNode();
  let head = p;
  while (l1 && l2) {
    if (l1.val <= l2.val) {
      head.next = l1;
      l1 = l1.next;
    } else {
      head.next = l2;
      l2 = l2.next;
    }
    head = head.next;
  }
  if (l1 !== null) {
    head.next = l1;
  } else {
    head.next = l2;
  }
  return p.next;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  if (l1 === null) {
    return l2;
  } else if (l2 === null) {
    return l1;
  } else if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
  }
};
