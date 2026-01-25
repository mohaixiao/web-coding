// https://leetcode.cn/problems/two-sum/?envType=problem-list-v2&envId=LTRv2Gcc
/**
 * @param {number[]} nums - 整数数组
 * @param {number} target - 目标值
 * @return {number[]} - 返回两个数的索引数组
 */
var twoSum = function (nums, target) {
    // 创建一个Map，用于存储已遍历的数字及其索引（key: 数字值, value: 索引）
    let map = new Map();
    // 遍历数组，i为当前索引
    for(let i = 0; i < nums.length; i++) {
      // 计算当前数字的补数（即target - nums[i]），如果这个补数在Map中存在，说明找到了答案
      const current = target - nums[i];
      // 检查Map中是否已经存在这个补数
      if(map.has(current)) {
        // 如果存在，返回补数的索引和当前索引
        return [map.get(current), i];
      }
      // 如果不存在，将当前数字和索引存入Map，供后续查找使用
      map.set(nums[i],i);
    }
  };
  