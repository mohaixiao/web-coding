// https://leetcode.cn/problems/n-queens/

// https://code-thinking-1253855093.file.myqcloud.com/pics/20210130182532303.jpg

var solveNQueens = function (n) {
    // 在单层搜索的过程中，每一层递归，只会选for循环（也就是同一行）里的一个元素，所以不用去重
    function isValid(row, col, chessBoard, n) {

        // 判断当前列有不有Q
        for (let i = 0; i < row; i++) {
            if (chessBoard[i][col] === 'Q') {
                return false
            }
        }

        // 检查 45度角是否有皇后
        for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
            if (chessBoard[i][j] === 'Q') {
                return false
            }
        }

        // 检查 135度角是否有皇后
        for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
            if (chessBoard[i][j] === 'Q') {
                return false
            }
        }
        return true
    }

    // 二位数组转换为一维数组
    function transformChessBoard(chessBoard) {
        let chessBoardBack = []
        chessBoard.forEach(row => {
            let rowStr = ''
            row.forEach(value => {
                rowStr += value
            })
            chessBoardBack.push(rowStr)
        })

        return chessBoardBack
    }

    let result = []
    function backtracing(row, chessBoard) {
        if (row === n) {
            result.push(transformChessBoard(chessBoard))
            return
        }
        for (let col = 0; col < n; col++) {
            if (isValid(row, col, chessBoard, n)) {
                chessBoard[row][col] = 'Q'
                backtracing(row + 1, chessBoard)
                chessBoard[row][col] = '.'
            }
        }
    }
    let chessBoard = new Array(n).fill([]).map(() => new Array(n).fill('.'))
    backtracing(0, chessBoard)
    return result

};