// 第三题，全排列
const compose = arr => {
    let len = arr.length;
    let res = [];
    let path = [];
    const backTracking = level => {
        if (level == len) {
            res.push(path.slice());
            return;
        }
        for (let i = 0; i < arr[level][i].length; i++) {
            path.push(arr[level][i]);
            backTracking(level + 1);
            path.pop();
        }
    }
    backTracking(0);
    return res;
}