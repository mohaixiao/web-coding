async function async1() {
    console.log("async1");
    await async2();
    console.log("async1 end");
}
async function async2() {
    console.log("async2")
}
console.log("script start");
setTimeout(() => {
    console.log("setTimeout")
}, 0);
async1();
new Promise((resolve) => {
    console.log("promise");
    resolve();
}).then(() => {
    console.log("promise2");
})
console.log("script end");