// judge('ByteDance','BD') -> true judge('Bytedance','BD') -> false

function isCamelString(targetString, abbreviation) {
    const upperTargetString = targetString.toUpperCase();
    let originUpperWords = '';
    for (let i = 0; i < upperTargetString.length; i++) {
        if (upperTargetString[i] === targetString[i]) {
            originUpperWords += targetString[i];
        }
    }
    return abbreviation === originUpperWords;
}

console.log(isCamelString('ByteDance', 'BD'));
console.log(isCamelString('Bytedance', 'BD'));
