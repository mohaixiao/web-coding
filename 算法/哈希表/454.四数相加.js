var fourSumCount = function (nums1, nums2, nums3, nums4) {
    // 创建一个存储num1 和num2 的Map
    const towSum = new Map()
    //统计合为0的次数
    let count = 0
    // 遍历num1和num2的数值之和 [和值，次数]
    for (let i of nums1) {
        for (let j of nums2) {
            let sum = i + j
            towSum.set(sum, (towSum.get(sum) || 0) + 1)
        }
    }
    // 遍历num3和num4的和值 0 - sum = num1+ num2
    for (let i of nums3) {
        for (let j of nums4) {
            let sum = i + j;
            count += (towSum.get(0 - sum) || 0)
        }
    }
    // 返回次数
    return count
};