// https://leetcode.cn/problems/sudoku-solver/

// https://code-thinking-1253855093.file.myqcloud.com/pics/2020111720451790-20230310131816104.png

var solveSudoku = function (board) {
    function isValid(row, col, val, board) {
        let len = board.length
        // 行不能重复
        for (let i = 0; i < len; i++) {
            if (board[row][i] === val) {
                return false
            }
        }
        // 列不能重复
        for (let i = 0; i < len; i++) {
            if (board[i][col] === val) {
                return false
            }
        }
        let startRow = Math.floor(row / 3) * 3
        let startCol = Math.floor(col / 3) * 3

        for (let i = startRow; i < startRow + 3; i++) {
            for (let j = startCol; j < startCol + 3; j++) {
                if (board[i][j] === val) {
                    return false
                }
            }
        }

        return true
    }

    function backTracking() {
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[0].length; j++) {
                if (board[i][j] !== '.') continue
                for (let val = 1; val <= 9; val++) {
                    if (isValid(i, j, `${val}`, board)) {
                        board[i][j] = `${val}`
                        if (backTracking()) {
                            return true
                        }

                        board[i][j] = `.`
                    }
                }
                return false
            }
        }
        return true
    }
    backTracking(board)
    return board
};
