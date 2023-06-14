// 实现一个连续调用多次并延迟的函数

// 基本递归
function repeat(cb, count, delay) {
    return function anoymouse(...args) {
        setTimeout(() => {
            cb(...args)
            count--
            if (count > 0) { anoymouse(...args) }
        }, delay);
    }
}

const fn = repeat(console.log, 5, 1000)

fn(1, 32, 34)


const timer = time => new Promise((resolve) => setTimeout(resolve, time))
function repeat(cb, count, delay) {
    return async function anoymouse(...args) {
        while (count > 0) {
            cb(...args)
            await timer(delay)
            count--
        }
    }
}
const fn = repeat(console.log, 5, 1000)

fn(1, 32, 34)