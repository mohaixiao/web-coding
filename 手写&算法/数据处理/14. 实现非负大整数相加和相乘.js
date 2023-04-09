// JavaScript对数值有范围的限制，限制如下：
Number.MAX_VALUE // 1.7976931348623157e+308
Number.MAX_SAFE_INTEGER // 9007199254740991
Number.MIN_VALUE // 5e-324
Number.MIN_SAFE_INTEGER // -9007199254740991

// （1）大数相加
// 如果想要对一个超大的整数(> Number.MAX_SAFE_INTEGER)进行加法运算，但是又想输出一般形式，那么使用 + 是无法达到的，一旦数字超过 Number.MAX_SAFE_INTEGER 数字会被立即转换为科学计数法，并且数字精度相比以前将会有误差。

// 其主要的思路如下：
// ● 首先用字符串的方式来保存大数，这样数字在数学表示上就不会发生变化
// ● 初始化res，temp来保存中间的计算结果，并将两个字符串转化为数组，以便进行每一位的加法运算
// ● 将两个数组的对应的位进行相加，两个数相加的结果可能大于10，所以可能要仅为，对10进行取余操作，将结果保存在当前位
// ● 判断当前位是否大于9，也就是是否会进位，若是则将temp赋值为true，因为在加法运算中，true会自动隐式转化为1，以便于下一次相加
// ● 重复上述操作，直至计算结束

// 实现一个算法进行大数的相加：
function sumBigNumber(a, b) {
    let res = '';
    let temp = 0;

    a = a.split('');
    b = b.split('');

    while (a.length || b.length || temp) {
        temp += ~~a.pop() + ~~b.pop();
        res = (temp % 10) + res;
        temp = temp > 9
    }
    return res.replace(/^0+/, '');
}

function add(a, b) {
    //取两个数字的最大长度
    let maxLength = Math.max(a.length, b.length);
    //用0去补齐长度
    a = a.padStart(maxLength, 0);//"0009007199254740991"
    b = b.padStart(maxLength, 0);//"1234567899999999999"
    //定义加法过程中需要用到的变量
    let t = 0;
    let f = 0;   //"进位"
    let sum = "";
    for (let i = maxLength - 1; i >= 0; i--) {
        t = parseInt(a[i]) + parseInt(b[i]) + f;
        f = Math.floor(t / 10);
        sum = t % 10 + sum;
    }
    if (f !== 0) {
        sum = '' + f + sum;
    }
    return sum;
}


// （2）大数相乘

function multiplyBigNum(num1, num2) {
    //判断输入是不是数字
    if (isNaN(num1) || isNaN(num2)) return "";
    num1 = num1 + ""
    num2 = num2 + ""
    let len1 = num1.length,
        len2 = num2.length;
    let pos = [];

    //j放外面，先固定被乘数的一位，分别去乘乘数的每一位，更符合竖式演算法
    for (let j = len2 - 1; j >= 0; j--) {
        for (let i = len1 - 1; i >= 0; i--) {
            //两个个位数相乘，最多产生两位数，index1代表十位，index2代表个位
            let index1 = i + j,
                index2 = i + j + 1;
            //两个个位数乘积加上当前位置个位已累积的数字，会产生进位，比如08 + 7 = 15，产生了进位1
            let mul = num1[i] * num2[j] + (pos[index2] || 0);
            //mul包含新计算的十位，加上原有的十位就是最新的十位
            pos[index1] = Math.floor(mul / 10) + (pos[index1] || 0);
            //mul的个位就是最新的个位
            pos[index2] = mul % 10;
        }
    }

    //去掉前置0
    let result = pos.join("").replace(/^0+/, "");

    return result - 0 || '0';
}