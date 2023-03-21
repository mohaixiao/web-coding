// https://leetcode.cn/problems/combination-sum-ii/

// https://code-thinking-1253855093.file.myqcloud.com/pics/20230310000918.png

// https://code-thinking-1253855093.file.myqcloud.com/pics/20230310000954.png

// 思路：
// 对目标数组排序，设置一个used数组表示对应candidates数组。设置total变量表示累计和
// 进行回溯函数 1、 如果total == target path数组推入res数组，如果大于直接return，如果小于并且满足剪纸条件 (i > 0 && cur === candidates[i - 1] && !used[i - 1])) 直接跳过本次循环，然后加工total，used，path然后进行回溯。

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
    const res = []; path = [], len = candidates.length;
    candidates.sort((a, b) => a - b);
    backtracking(0, 0);
    return res;
    function backtracking(sum, i) {
        if (sum === target) {
            res.push(Array.from(path));
            return;
        }
        for (let j = i; j < len; j++) {
            const n = candidates[j];
            if (j > i && candidates[j] === candidates[j - 1]) {
                //若当前元素和前一个元素相等
                //则本次循环结束，防止出现重复组合
                continue;
            }
            //如果当前元素值大于目标值-总和的值
            //由于数组已排序，那么该元素之后的元素必定不满足条件
            //直接终止当前层的递归
            if (n > target - sum) break;
            path.push(n);
            sum += n;
            backtracking(sum, j + 1);
            path.pop();
            sum -= n;
        }
    }
};

// 使用used去重

var combinationSum2 = function (candidates, target) {
    let res = [];
    let path = [];
    let total = 0;
    const len = candidates.length;
    candidates.sort((a, b) => a - b);
    let used = new Array(len).fill(false);
    const backtracking = (startIndex) => {
        if (total === target) {
            res.push([...path]);
            return;
        }
        for (let i = startIndex; i < len && total < target; i++) {
            const cur = candidates[i];
            if (cur > target - total || (i > 0 && cur === candidates[i - 1] && !used[i - 1])) continue;
            path.push(cur);
            total += cur;
            used[i] = true;
            backtracking(i + 1);
            path.pop();
            total -= cur;
            used[i] = false;
        }
    }
    backtracking(0);
    return res;
};

function combinationSum2(candidates, target) {
    candidates.sort((a, b) => a - b);
    const resArr = [];
    backTracking(candidates, target, 0, 0, []);
    return resArr;
    function backTracking(candidates, target, curSum, startIndex, route) {
        if (curSum > target) return;
        if (curSum === target) {
            resArr.push([...route]);
            return;
        }
        const helperSet = new Set();
        for (let i = startIndex, length = candidates.length; i < length; i++) {
            let tempVal = candidates[i];
            if (helperSet.has(tempVal)) continue;
            helperSet.add(tempVal);
            route.push(tempVal);
            backTracking(candidates, target, curSum + tempVal, i + 1, route);
            route.pop();
        }
    }
};