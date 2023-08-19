// https://leetcode.cn/problems/ju-zhen-zhong-de-lu-jing-lcof/?envType=featured-list&envId=xb9nqhhg

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  const dfs = (board, word, u, x, y) => {
    // 边界
    if (x < 0 || x >= board.length || y < 0 || y >= board[0].length)
      return false;
    // 失败
    if (word[u] !== board[x][y]) return false;
    // 来到最后一步了成功
    if (u === word.length - 1) return true;

    // 上下左右
    const xArr = [-1, 0, 1, 0];
    const yArr = [0, 1, 0, -1];
    //
    let t = board[x][y];
    // 避免倒退，反复横跳
    board[x][y] = "";
    // 上下左右
    for (let i = 0; i < 4; i++) {
      let a = xArr[i] + x;
      let b = yArr[i] + y;
      if (a >= 0 && a < board.length && b >= 0 && b < board[0].length) {
        if (dfs(board, word, u + 1, a, b)) return true;
      }
    }
    // 恢复原状
    board[x][y] = t;
  };

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (dfs(board, word, 0, i, j)) return true;
    }
  }
  return false; //找不到
};
