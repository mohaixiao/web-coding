// JavaScript 压缩字符串

// abbccccaaa->a1b2c4a3

function zipString(str) {
    if (str.length < 2)
        return str
    let result = ''
    let currentLetter = str[0]
    let count = 1
    for (let i = 1; i < str.length; i++) {
        if (str[i] === currentLetter) {
            count++
        } else {
            result += currentLetter + count
            currentLetter = str[i]
            count = 1
        }
    } result += currentLetter + count
    return result
}

console.log(zipString('abbccccaaa'));