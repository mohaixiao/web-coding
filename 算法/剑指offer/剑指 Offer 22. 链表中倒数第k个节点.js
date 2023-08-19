// https://leetcode.cn/problems/lian-biao-zhong-dao-shu-di-kge-jie-dian-lcof/?envType=featured-list&envId=xb9nqhhg

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function(head, k) {
    let i = head;
    let j = head;
    while(k--) {
        j = j.next;
    }
    while(j) {
        i = i.next;
        j = j.next
    }
    return i
};