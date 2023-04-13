setTimeout(() => {
    console.log(1);
}, 0);

async function main1() {
    new Promise((resolve, reject) => {
        console.log(2);
        resolve();
    }).then(() => {
        console.log(3);
    })
    await main2();
    console.log(7);
}

function main2() {
    console.log(8);
}
console.log('x');
main1();
console.log('y');

setTimeout(() => {
    console.log(10);
}, 0);

// 2
// 8
// 3
// 7
// 1
// 10
