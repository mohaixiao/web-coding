// 有30个小孩儿，编号从1-30，围成一圈依此报数，1、2、3 数到 3 的小孩儿退出这个圈， 然后下一个小孩 重新报数 1、2、3，问最后剩下的那个小孩儿的编号是多少?
// 约瑟夫问题

function childNum(num, count) {
    let allplayer = [];
    for (let i = 0; i < num; i++) {
        allplayer[i] = i + 1;
    }

    let exitCount = 0;    // 离开人数
    let counter = 0;      // 记录报数
    let curIndex = 0;     // 当前下标

    while (exitCount < num - 1) {
        // 未离开++
        if (allplayer[curIndex] !== 0) counter++;
        // 离开 + 重置报数 + 离开人数改变
        if (counter == count) {
            allplayer[curIndex] = 0;
            counter = 0;
            exitCount++;
        }
        curIndex++;
        // 循环圈报号
        if (curIndex == num) {
            curIndex = 0
        };
    }
    for (i = 0; i < num; i++) {
        if (allplayer[i] !== 0) {
            return allplayer[i]
        }
    }
}
console.log(childNum(30, 3));