// https://leetcode.cn/problems/fan-zhuan-dan-ci-shun-xu-lcof/description/?envType=featured-list&envId=xb9nqhhg

// https://leetcode.cn/leetbook/read/illustration-of-algorithm/58kxyv/

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let arr = Array.from(s);
  dectrim(arr);
  reverse(arr, 0, arr.length - 1);
  let start = 0;
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] == " " || i == arr.length) {
      reverse(arr, start, i - 1);
      start = i + 1;
    }
  }
  return arr.join("");
};

function dectrim(strArr) {
  // 快慢指针
  let slowIndex = 0;
  let fastIndex = 0;

  while (fastIndex < strArr.length) {
    // 移除开始位置和重复的空格
    if (
      strArr[fastIndex] === " " &&
      (fastIndex === 0 || strArr[fastIndex - 1] === " ")
    ) {
      fastIndex++;
    } else {
      strArr[slowIndex++] = strArr[fastIndex++];
    }
  }

  // 移除末尾空格
  strArr.length = strArr[slowIndex - 1] === " " ? slowIndex - 1 : slowIndex;
}

function reverse(s, left, right) {
  let start = left;
  let end = right;
  while (start < end) {
    [s[start], s[end]] = [s[end], s[start]];
    start++;
    end--;
  }
}

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  s = s.trim(); // 删除首尾空格
  let j = s.length - 1,
    i = j;
  let res = [];
  while (i >= 0) {
    while (i >= 0 && s.charAt(i) != " ") i--; // 搜索首个空格
    res.push(s.substring(i + 1, j + 1)); // 添加单词
    while (i >= 0 && s.charAt(i) == " ") i--; // 跳过单词间空格
    j = i; // j 指向下个单词的尾字符
  }
  return res.join(" "); // 转化为字符串并返回
};
