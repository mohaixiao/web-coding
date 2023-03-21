// 剪枝：

// 思路：
// 使用2个数组拉记录path单个情况和result全部情况
// 回溯函数：确定参数，n，k，i，i为开始的下标，先终止条件 ， 在for循环遍历，i可以进行剪纸，

let result = [] // 全部结果
let path = [] // 单个情况
var combine = function (n, k) {
  result = []
  combineHelper(n, k, 1)
  return result
};


const combineHelper = (n, k, startIndex) => {
  // 终止条件 等于k就记录一次
  if (path.length === k) {
    result.push([...path])
    return
  }
  // 从选中的元素之后再循环，(剪纸) i <= n - (k - path.length) + 1 保证后面递归的for循环还有节点可以取得到。
  for (let i = startIndex; i <= n - (k - path.length) + 1; ++i) {
    path.push(i)
    combineHelper(n, k, i + 1)
    path.pop()
  }
}


var combine = function (n, k) {
  const res = [], path = [];
  backtracking(n, k, 1);
  return res;
  function backtracking(n, k, i) {
    const len = path.length;
    if (len === k) {
      res.push(Array.from(path));
      return;
    }
    for (let a = i; a <= n + len - k + 1; a++) {
      path.push(a);
      backtracking(n, k, a + 1);
      path.pop();
    }
  }
};