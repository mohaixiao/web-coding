function decodeString(str) {
    const stack = [];
    let result = '';
    let num = 0;

    for (let i = 0; i < str.length; i++) {
        const char = str[i];

        if (/\d/.test(char)) {
            // 遇到数字，累加得到完整的数字
            num = num * 10 + parseInt(char);
        } else if (char === '[') {
            // 将当前数字和结果入栈，并重置数字和结果
            stack.push(num);
            stack.push(result);
            num = 0;
            result = '';
        } else if (char === ']') {
            // 出栈并将结果重复指定次数后拼接到新的结果上
            const prevResult = stack.pop();
            const repeatTimes = stack.pop();
            result = prevResult + result.repeat(repeatTimes);
        } else {
            // 遇到字母，直接拼接到结果上
            result += char;
        }
    }

    return result;
}

console.log(decodeString('3[a4[b]]')); // 输出 'abbbbabbbbabbbb'


const id = 10;
const obj = {
    id: 100,
    a: function () {
        console.log(this.id);
    },
    b: () => {
        console.log(this.id);
    }
}

// console.log(new obj.b());
obj.b();

// 输入字符串:“3[a4[b]]” 输出字符串: “abbbbabbbbabbbb”