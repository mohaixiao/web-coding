// https://leetcode.cn/problems/remove-nth-node-from-end-of-list/

// 双指针的经典应用，如果要删除倒数第n个节点，让fast移动n步，然后让fast和slow同时移动，直到fast指向链表末尾。

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    // 新建一个ret + 快慢指针
    let ret = new ListNode(0, head),
        slow = fast = ret;
    // fast 先走
    while (n--) fast = fast.next;
    // 同步走 直到fast到倒数第二个节点
    while (fast.next !== null) {
        fast = fast.next;
        slow = slow.next
    };
    // 删除节点 slow 的后2个节点操作
    slow.next = slow.next.next;
    return ret.next;
};