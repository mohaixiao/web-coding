String.prototype.myIncludes = function (word) {
    let str = this;
    if (word === '') return true;
    for (let i = 0; i < str.length - word.length + 1; i++) {
        let subStr = '';
        for (let j = i; j < i + word.length; j++) {
            subStr += str[j];
            if (subStr === word) return true;
        }
    }
    return false;
}