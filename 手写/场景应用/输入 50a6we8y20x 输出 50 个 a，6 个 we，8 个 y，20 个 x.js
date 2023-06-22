// 输入 50a6we8y20x 输出 50 个 a，6 个 we，8 个 y，20 个 x

// 这道题最正确的解法应该是正则
function print(str){
    return String(str).replace(/(\d+)([a-zA-Z]+)/g,function(_, number, string){
        return string.repeat(number);
    })
}

console.log(print('50a6we8y20x'));