// JS异步数据流，实现并发异步请求，结果顺序输出

// https://blog.csdn.net/xutongbao/article/details/116453000

// 并发执行异步事件，按顺序输出结果, 总耗时为数组中最大的数:
const getData = async (num) => {
    return await new Promise((resolve) => {
        setTimeout(() => {
            resolve(num)
        }, num)
    })
}

//并发执行异步事件，按顺序输出结果,总耗时为数组中最大的数 5s
const order = async (nums) => {
    const promises = nums.map(async num => {
        return await getData(num)
    })
    for (const data of promises) {
        console.log(await data)
    }
    console.log(new Date())
}

const nums = [3000, 2000, 1000, 5000, 5000]
console.log(new Date())
order(nums)


// 继发执行异步事件，按顺序输出结果, 总耗时为数组中的数字之和: 16s
const getData = async (num) => {
    return await new Promise((resolve) => {
        setTimeout(() => {
            resolve(num)
        }, num)
    })
}

//继发执行异步事件，按顺序输出结果,总耗时为数组中的数字之和 16s
const order = async (nums) => {
    for (const num of nums) {
        const res = await getData(num)
        console.log(res)
    }
    console.log(new Date())
}

const nums = [3000, 2000, 1000, 5000, 5000]
console.log(new Date())
order(nums)


// 使用Promise.all也可以： 5s

const getData = async (num) => {
    return await new Promise((resolve) => {
        setTimeout(() => {
            resolve(num)
        }, num)
    })
}

//并发执行异步事件，按顺序输出结果,总耗时为数组中最大的数
const order = async (nums) => {
    const promises = nums.map(async (num) => {
        return getData(num)
    })
    const result = await Promise.all(promises)
    result.forEach(item => {
        console.log(item)
    })
    console.log(new Date())
}

const nums = [3000, 2000, 1000, 5000, 5000]
console.log(new Date())
order(nums)


