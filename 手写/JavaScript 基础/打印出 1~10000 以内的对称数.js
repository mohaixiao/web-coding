// 1-1000回文数

function isSymmetryNum(start, end) {
    for (let i = start; i < end + 1; i++) {
        let str = String(i);
        if (str.length <= 1) continue;
        if (str.split("").reverse().join("") === str) {
            console.log(i);
        }
    }
}
isSymmetryNum(1, 10000)


// 双指针
const res = [];
function getSymNum() {
    for (let i = 1; i <= 10000; i++) {
        let str1 = i + "";
        if (judgeSym(str1)) res.push(i);
    }
}
function judgeSym(str) {
    let l = 0,
        r = str.length - 1;
    while (l < r) {
        if (str[l] !== str[r]) return false;
        r--;
        l++;
    }
    return true;
}
getSymNum();
console.log(res);

