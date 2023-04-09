// 第一种
var str = "abcccwwwasdasfqwweqewqeqwnn"
var arr = str.split("")
var Arr = arr.sort()
let num = 1;
let max = "";
let maxs = 0;
for (var i = 0; i < Arr.length; i++) {
    if (Arr[i] == Arr[i + 1]) {
        num++
    } else {
        if (num > maxs) {
            maxs = num
            max = Arr[i]
        }
        num = 1
    }
}
console.log(max, maxs)

// 第二种
// 例: abbcccddddd -> 字符最多的是d，出现了5次

let str = "abcabcabcbbccccc";
let num = 0;
let char = '';

// 使其按照一定的次序排列
str = str.split('').sort().join('');
// "aaabbbbbcccccccc"

// 定义正则表达式
let re = /(\w)\1+/g;
str.replace(re, ($0, $1) => {
    if (num < $0.length) {
        num = $0.length;
        char = $1;
    }
});
console.log(`字符最多的是${char}，出现了${num}次`);

// 第三种
var str = "abcccwwwasdasfqwweqewqeqwnn"
var o = {}
for (var i = 0; i < str.length; i++) {
    var name = str[i]
    if (o[name]) {
        o[name]++
    } else {
        o[name] = 1
    }
}
var max = 0;
var maxs = ""
for (var name in o) {
    if (max < o[name]) {
        max = name
    }
}
console.log(max, maxs)


