
// https://leetcode.cn/problems/group-anagrams/


/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    // 创建一个Map
    const map = new Map();
    // 遍历每一个元素
    for (let str of strs) {
        // 将元素转换为数组，排序后在转换为字符串，得到相同索引key
        let array = Array.from(str);
        array.sort();
        let key = array.toString();
        // Map中有就找到对应list，添加新元素，没有就创建新数组，添加元素
        let list = map.get(key) ? map.get(key) : new Array();
        list.push(str);
        // 将更新的list存储到Map
        map.set(key, list);
    }
    // 将Map转换为数组
    return Array.from(map.values());
};