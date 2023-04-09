// 3 实现lodash的chunk方法--数组按指定长度拆分

// 题目
/**
 * @param input
 * @param size
 * @returns {Array}
 */
_.chunk(['a', 'b', 'c', 'd'], 2)
// => [['a', 'b'], ['c', 'd']]

_.chunk(['a', 'b', 'c', 'd'], 3)
// => [['a', 'b', 'c'], ['d']]

_.chunk(['a', 'b', 'c', 'd'], 5)
// => [['a', 'b', 'c', 'd']]

_.chunk(['a', 'b', 'c', 'd'], 0)
// => []


// 实现
function chunk(arr, length) {
    let newArr = [];
    for (let i = 0; i < arr.length; i += length) {
        newArr.push(arr.slice(i, i + length));
    }
    return newArr;
}