// https://leetcode.cn/problems/ti-huan-kong-ge-lcof/?envType=featured-list&envId=xb9nqhhg

/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function (s) {
  let arr = Array.from(s);
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == " ") {
      count++;
    }
  }
  let left = arr.length - 1;
  let right = arr.length + count * 2 - 1;
  while (left >= 0) {
    if (arr[left] == " ") {
      arr[right--] = "0";
      arr[right--] = "2";
      arr[right--] = "%";
      left--;
    } else {
      arr[right--] = arr[left--];
    }
  }
  return arr.join("");
};
