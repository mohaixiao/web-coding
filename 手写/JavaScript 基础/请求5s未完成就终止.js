const funWait = (call, timeout = 5000) => {
    let wait = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('请求超时')
        }, timeout)
    })
    return Promise.race([call(), wait])
}
const t = () => new Promise(resolve => setTimeout(resolve, 4000))
const t2 = () => new Promise(resolve => setTimeout(resolve, 6000))

funWait(t).then(res => {
    console.log("t1 resolve")
}).catch(err => {
    console.log("t1 timeout")
})
funWait(t2).then(res => {
    console.log("t2 resolve")
}).catch(err => {
    console.log("t2 timeout", err)
})