// https://leetcode.cn/problems/merge-two-sorted-lists/description/?envType=problem-list-v2&envId=LTRv2Gcc

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 方法一：迭代（遍历）方法
 * @param {ListNode} list1 - 第一个有序链表
 * @param {ListNode} list2 - 第二个有序链表
 * @return {ListNode} - 合并后的有序链表
 */
var mergeTwoLists = function (l1, l2) {
  // 创建一个虚拟头节点，方便处理边界情况
  const dummy = new ListNode(0);
  // 创建一个指针，用于构建新链表
  let current = dummy;

  // 当两个链表都不为空时，进行比较和合并
  while (l1 !== null && l2 !== null) {
    // 比较两个链表当前节点的值
    if (l1.val <= l2.val) {
      // 如果l1的值更小或相等，将l1的节点连接到新链表
      current.next = l1;
      // l1指针向后移动
      l1 = l1.next;
    } else {
      // 如果l2的值更小，将l2的节点连接到新链表
      current.next = l2;
      // l2指针向后移动
      l2 = l2.next;
    }
    // 新链表的指针向后移动
    current = current.next;
  }

  // 将剩余的非空链表连接到新链表的末尾
  // 如果l1还有剩余节点，直接连接l1
  // 如果l2还有剩余节点，直接连接l2
  current.next = l1 !== null ? l1 : l2;

  // 返回虚拟头节点的下一个节点，即合并后的链表头节点
  return dummy.next;
};

/**
 * 方法二：递归方法
 * @param {ListNode} list1 - 第一个有序链表
 * @param {ListNode} list2 - 第二个有序链表
 * @return {ListNode} - 合并后的有序链表
 */
var mergeTwoListsRecursive = function (l1, l2) {
  // 递归终止条件：如果l1为空，返回l2（包括l2也为空的情况）
  if (l1 === null) {
    return l2;
  }
  // 递归终止条件：如果l2为空，返回l1
  if (l2 === null) {
    return l1;
  }

  // 比较两个链表当前节点的值
  if (l1.val <= l2.val) {
    // 如果l1的值更小或相等，将l1作为当前节点
    // 递归合并l1.next和l2，并将结果连接到l1
    l1.next = mergeTwoListsRecursive(l1.next, l2);
    // 返回l1作为当前子链表的头节点
    return l1;
  } else {
    // 如果l2的值更小，将l2作为当前节点
    // 递归合并l1和l2.next，并将结果连接到l2
    l2.next = mergeTwoListsRecursive(l1, l2.next);
    // 返回l2作为当前子链表的头节点
    return l2;
  }
};
