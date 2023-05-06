// https://leetcode.cn/problems/sorted-merge-lcci/description/

var merge = function (A, m, B, n) {
    let pa = 0, pb = 0;
    const sorted = new Array(m + n).fill(0);
    var cur;
    while (pa < m || pb < n) {
        if (pa === m) {
            cur = B[pb++];
        } else if (pb === n) {
            cur = A[pa++];
        } else if (A[pa] < B[pb]) {
            cur = A[pa++];
        } else {
            cur = B[pb++];
        }
        sorted[pa + pb - 1] = cur;
    }
    for (let i = 0; i != m + n; ++i) {
        A[i] = sorted[i];
    }
};


/**
 * @param {number[]} A
 * @param {number} m
 * @param {number[]} B
 * @param {number} n
 * @return {void} Do not return anything, modify A in-place instead.
 */
var merge = function (A, m, B, n) {
    A.splice(m, n, ...B);
    return A.sort((a, b) => a - b)
};