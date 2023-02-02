// https://leetcode.cn/problems/swap-nodes-in-pairs/

// https://code-thinking.cdn.bcebos.com/pics/24.%E4%B8%A4%E4%B8%A4%E4%BA%A4%E6%8D%A2%E9%93%BE%E8%A1%A8%E4%B8%AD%E7%9A%84%E8%8A%82%E7%82%B91.png

var swapPairs = function (head) {
    // 创建虚拟头结点 temp 暂存指针
    let ret = new ListNode(0, head), temp = ret;
    // 循环遍历
    while (temp.next && temp.next.next) {
        // pre cur 双指针
        let cur = temp.next.next, pre = temp.next;
        // 步骤三 1 -> 3
        pre.next = cur.next;
        // 步骤二 2 -> 1
        cur.next = pre;
        // 步骤一 ret -> 2
        temp.next = cur;
        // 移动暂存点
        temp = pre;
    }
    return ret.next;
};