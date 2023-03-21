// https://leetcode.cn/problems/gas-station/

// 暴力：
var canCompleteCircuit = function (gas, cost) {
    for (let i = 0; i < cost.length; i++) {
        let rest = gas[i] - cost[i]  //记录剩余油量
        // 以i为起点行驶一圈，index为下一个目的地
        let index = (i + 1) % cost.length
        while (rest > 0 && index !== i) {
            rest += gas[index] - cost[index]
            index = (index + 1) % cost.length
        }
        if (rest >= 0 && index === i) return i
    }
    return -1
};

// 解法一：
var canCompleteCircuit = function (gas, cost) {
    let curSum = 0
    let min = Infinity
    for (let i = 0; i < gas.length; i++) {
        let rest = gas[i] - cost[i]
        curSum += rest
        if (curSum < min) {
            min = curSum
        }
    }
    if (curSum < 0) return -1   //1.总油量 小于 总消耗量
    if (min >= 0) return 0      //2. 说明油箱里油没断过
    //3. 从后向前，看哪个节点能这个负数填平，能把这个负数填平的节点就是出发节点
    for (let i = gas.length - 1; i >= 0; i--) {
        let rest = gas[i] - cost[i]
        min += rest
        if (min >= 0) {
            return i
        }
    }
    return -1
}

// 解法二：
var canCompleteCircuit = function (gas, cost) {
    const gasLen = gas.length
    let start = 0
    let curSum = 0
    let totalSum = 0

    for (let i = 0; i < gasLen; i++) {
        curSum += gas[i] - cost[i]
        totalSum += gas[i] - cost[i]
        if (curSum < 0) {
            curSum = 0
            start = i + 1
        }
    }

    if (totalSum < 0) return -1

    return start
};