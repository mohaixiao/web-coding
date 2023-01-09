var findNumberIn2DArray = function (matrix, target) {
    if (matrix == null || matrix.length == 0) {
        return false;
    }
    // 行
    let row = 0;
    // 列
    let column = matrix[0].length - 1;
    while (row < matrix.length && column >= 0) {
        // 找到
        if (matrix[row][column] == target) {
            return true;
        } else if (matrix[row][column] > target) {
            // 变小 列--
            column--;
        } else {
            // 变大 行++
            row++;
        }
    }
    return false;
};


let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

console.log(findNumberIn2DArray(arr, 5));