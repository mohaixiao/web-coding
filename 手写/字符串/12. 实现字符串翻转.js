// 在字符串的原型链上添加一个方法，实现字符串翻转：
// 需要注意的是，必须通过实例化对象之后再去调用定义的方法，不然找不到该方法。
String.prototype._reverse = function (a) {
    return a.split("").reverse().join("");
}
var obj = new String();
var res = obj._reverse('hello');
console.log(res);    // olleh


/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
    let i = 0;
    let j = s.length - 1;

    while (j >= i) {
        [s[i], s[j]] = [s[j], s[i]];
        j--;
        i++;
    }
};