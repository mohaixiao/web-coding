// https://leetcode.cn/problems/remove-linked-list-elements/

// 思路：增加一个头结点，cur 等于新头节点，使用cur，next进行循环删除，删除之后记得跳过本次循环。

/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  const ret = new ListNode(0, head);
  let cur = ret;
  while (cur.next) {
    if (cur.next.val === val) {
      cur.next = cur.next.next;
      continue;
    }
    cur = cur.next;
  }
  return ret.next;
};


