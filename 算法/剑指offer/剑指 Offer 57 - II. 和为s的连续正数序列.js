// https://leetcode.cn/problems/he-wei-sde-lian-xu-zheng-shu-xu-lie-lcof/?envType=featured-list&envId=xb9nqhhg

/**
 * @param {number} target
 * @return {number[][]}
 */
var findContinuousSequence = function (target) {
  const result = [];
  const child = [1, 2];
  let big = 2;
  let small = 1;
  let currentSum = 3;
  while (big < target) {
    while (currentSum < target && big < target) {
      child.push(++big);
      currentSum += big;
    }
    while (currentSum > target && small < big) {
      child.shift();
      currentSum -= small++;
    }
    if (currentSum === target && child.length > 1) {
      result.push(child.slice());
      child.push(++big);
      currentSum += big;
    }
  }
  return result;
};


var findContinuousSequence = function (target) {
  let sum = 1; //窗口数组的和
  let list = [1]; //窗口
  let returnList = [];
  for (let i = 2; i <= Math.ceil(target / 2); i++) {
    sum += i;
    list.push(i); //每次循环，都将当前的数加入滑动窗口中
    while (sum > target) {
      sum -= list.shift(); //移除前面较小的数
    }
    if (sum == target) {
      returnList.push(list.slice(0)); //slice深拷贝
    }
  }
  return returnList;
};
