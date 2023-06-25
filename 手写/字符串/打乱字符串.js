function shuffleString(str) {
    // 将字符串转换为数组
    var arr = str.split('');

    // 使用 Fisher-Yates 算法进行数组打乱
    for (var i = arr.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    // 将打乱后的数组转换回字符串并返回
    return arr.join('');
}

// 示例用法
var originalString = 'Hello, World!';
var shuffledString = shuffleString(originalString);
console.log(shuffledString);
