// https://leetcode.cn/problems/er-jin-zhi-zhong-1de-ge-shu-lcof/?envType=featured-list&envId=xb9nqhhg

// https://leetcode.cn/problems/er-jin-zhi-zhong-1de-ge-shu-lcof/solutions/832837/er-jin-zhi-zhong-1de-ge-shu-by-leetcode-50bb1/?envType=featured-list&envId=xb9nqhhg
var hammingWeight = function (n) {
  let ret = 0;
  for (let i = 0; i < 32; i++) {
    if ((n & (1 << i)) !== 0) {
      ret++;
    }
  }
  return ret;
};

var hammingWeight = function (n) {
  let ret = 0;
  while (n) {
    n &= n - 1;
    ret++;
  }
  return ret;
};


