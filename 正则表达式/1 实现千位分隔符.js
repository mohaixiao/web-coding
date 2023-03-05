// https://www.bilibili.com/video/BV1tK4y1x7NY/?spm_id_from=333.337.search-card.all.click&vd_source=037b856144283671f89f562ed7eeb263

function parseToMoney(num) {
    num = parseFloat(num.toFixed(3));
    let [integer, decimal] = String.prototype.split.call(num, '.');
    integer = integer.replace(/\d(?=(\d{3})+$)/g, '$&,');
    return integer + + (decimal ? `.${decimal}` : '');
}

// 保留三位小数
console.log(parseToMoney(1234.56)); // return '1,234.56'
console.log(parseToMoney(123456789)); // return '123,456,789'
console.log(parseToMoney(1087654.321)); // return '1,087,654.321'