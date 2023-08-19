// https://leetcode.cn/problems/liang-ge-lian-biao-de-di-yi-ge-gong-gong-jie-dian-lcof/?envType=featured-list&envId=xb9nqhhg

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  let A = headA;
  let B = headB;
  while (A !== B) {
    A = A === null ? headB : A.next;
    B = B === null ? headA : B.next;
  }
  return A;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  // 获取链表长度
  let length1 = getLength(headA);
  let length2 = getLength(headB);
  // 长链表先行
  let lang, short, interval;
  if (length1 > length2) {
    lang = headA;
    short = headB;
    interval = length1 - length2;
  } else {
    lang = headB;
    short = headA;
    interval = length2 - length1;
  }
  while (interval--) {
    lang = lang.next;
  }
  // 找相同节点
  while (lang) {
    if (lang === short) {
      return lang;
    }
    lang = lang.next;
    short = short.next;
  }
  return null;
};

function getLength(head) {
  let current = head;
  let result = 0;
  while (current) {
    result++;
    current = current.next;
  }
  return result;
}
