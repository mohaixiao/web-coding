function printMatrix(arr) {
    // m 行 n 列
    let m = arr.length, n = arr[0].length
    let res = []

    // （0,0）
    // 左上角，从0 到 n - 1 列进行打印
    for (let k = 0; k < n; k++) {
        // i 行 j 列 i++ j-- 左下移动（m,0）
        for (let i = 0, j = k; i < m && j >= 0; i++, j--) {
            res.push(arr[i][j]);
        }
    }

    // （1，n-1）
    // 右下角，从1 到 n - 1 行进行打印
    for (let k = 1; k < m; k++) {
        // i 行 j 列 i++ j-- 左下移动（m,0）
        for (let i = k, j = n - 1; i < m && j >= 0; i++, j--) {
            res.push(arr[i][j]);
        }
    }
    return res
}


let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

console.log(printMatrix(arr));