// （1）利用数组splice，split，join方法
// 字符串 -> 数组 -> 字符串 
let tel = 18877776666;
tel = "" + tel;
var ary = tel.split("");
ary.splice(3, 4, "****");
var tel1 = ary.join("");
console.log(tel1);

// （2）利用字符串的substr方法
// 字符串切割 
let tel = 18877776666;
tel = "" + tel;
var tel1 = tel.substr(0, 3) + "****" + tel.substr(7)
console.log(tel1);

// （3）利用字符串substring方法

let tel = 18877776666;
tel = "" + tel;
var tel1 = tel.replace(tel.substring(3, 7), "****")
console.log(tel1);

// （4）利用正则

let tel = 18877776666;
tel = "" + tel;
var reg = /(\d{3})\d{4}(\d{4})/;
var tel1 = tel.replace(reg, "$1****$2")
console.log(tel1);