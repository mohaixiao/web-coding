// 手写一个生成随机颜色（颜色表示方式用'#666fff'这种）的函数

function randomColor() {
    let colorStr = '#';
    for (let i = 0; i < 6; i++) {
        let cur = Math.floor(Math.random() * 16)
        if (cur >= 10) cur = cur.toString(16).toUpperCase()
        colorStr += cur
    }
    return colorStr;
}

console.log(randomColor())