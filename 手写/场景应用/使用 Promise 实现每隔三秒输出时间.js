function showTime() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(new Date());
            resolve();
        }, 3000);
    })
}
const time = async () => {
    await showTime();
    time();
}
time();

