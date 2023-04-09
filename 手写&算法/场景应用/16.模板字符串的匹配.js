let str = '你爱我，我爱你，${line1}甜蜜蜜。你爱我，我爱你，${line2}${line3}。';
let obj = {
    line1: '我学编程',
    line2: '你学编程',
    line3: '天灭你'
};
function templateStrFun(str, obj) {
    return str.replace(/\$\{(.*?)\}/g, (match, key) => {
        console.log(match); // ${key}
        console.log(key); // key 输出括号里面的
        return obj[key];
    });
}
console.log(templateStrFun(str, obj));
// 你爱我，我爱你，我学编程甜蜜蜜。你爱我，我爱你，你学编程天灭你。

