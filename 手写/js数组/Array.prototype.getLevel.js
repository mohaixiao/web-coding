Array.prototype.getLevel = function () {
    // 初始层数为 1，用于记录当前嵌套层数
    let level = 1;
    // 遍历数组中的元素，查找可能存在的子数组
    for (let i = 0; i < this.length; i++) {
        if (Array.isArray(this[i])) {
            // 如果当前元素是一个数组，则递归计算子数组的层数，并加上自身的层数（即 1）
            let subLevel = this[i].getLevel() + 1;
            // 更新当前数组的最大层数
            if (subLevel > level) {
                level = subLevel;
            }
        }
    }
    // 返回计算出的最大层数
    return level;
}


const a1 = [1, 2, [1], [1, [2, [3]]]];
console.log(a1.getLevel()); //4