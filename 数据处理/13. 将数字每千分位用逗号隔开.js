// 方法一
function format(number) {
    return number && number.replace(/(?!^)(?=(\d{3})+\.)/g, ",");
}
// 方法二
function format1(number) {
    return Intl.NumberFormat().format(number)
}
// 方法三
function format2(number) {
    return number.toLocaleString('en')
}

// 数字有小数版本：
let format = n => {
    let num = n.toString() // 转成字符串
    let decimals = ''
    // 判断是否有小数
    num.indexOf('.') > -1 ? decimals = num.split('.')[1] : decimals
    // 总长度
    let len = num.length
    if (len <= 3) {
        return num
    } else {
        let temp = ''
        let remainder = len % 3
        decimals ? temp = '.' + decimals : temp // 有小数加. 没小数就''
        if (remainder > 0) { // 不是3的整数倍
            return num.slice(0, remainder) + ',' + num.slice(remainder, len).match(/\d{3}/g).join(',') + temp
        } else { // 是3的整数倍
            return num.slice(0, len).match(/\d{3}/g).join(',') + temp
        }
    }
}
console.log(format(12323.3367));  // '1,232,336.3367'

// 数字无小数版本：
let format = n => {
    let num = n.toString();
    let len = num.length
    if (len <= 3) {
        return num
    } else {
        let remainder = len % 3
        if (remainder > 0) { // 不是3的整数倍
            return num.slice(0, remainder) + ',' + num.slice(remainder, len).match(/\d{3}/g).join(',')
        } else { // 是3的整数倍
            return num.slice(0, len).match(/\d{3}/g).join(',')
        }
    }
}
format(1232323)  // '1,232,323'