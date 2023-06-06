
// Promise._all = function (promises) {
//     if (!(typeof promises == "object" && promises !== null)) {
//         throw new Error("promises 不可迭代！")
//     }

//     return new Promise((resolve, reject) => {
//         let count = 0;
//         promises = [...promises];
//         let len = promises.length;
//         let result = []

//         if (len == 0) {
//             resolve(result)
//         }
//         for (let i of promises) {
//             Promise.resolve(i).then(res => {
//                 if (len == ++count) {
//                     resolve(result);
//                 }
//                 result.push(res);
//             }, err => {
//                 reject(err);
//             })
//         }
//     })
// }


// let p1 = Promise.resolve(1);
// let p2 = Promise.reject(2)
// let p3 = Promise.resolve(3);
// let p4 = Promise.resolve(4);

// Promise._all([p1, p3, p2, p4]).then(err => console.log(err)).catch(err => console.log(err));



// let nums = [1, 2, 3, 4, 5];

// function findTwo(nums, target) {
//     let i = 0;
//     let j = nums.length - 1;
//     let total = 0;
//     while (i <= j) {
//         total = nums[i] + nums[j];
//         if (total < target) {
//             i++;
//         } else if (total > target) {
//             j--;
//         } else {
//             return [i, j];
//         }
//     }
//     return [-1, -1]
// }

// console.log(findTwo(nums, 4));


// function findTwo1(nums, target) {

//     let obj = {};
//     for (let i = 0; i < nums.length; i++) {
//         if (obj[target - nums[i]] !== undefined) {
//             return [i, obj[target - nums[i]]]
//         }
//         obj[nums[i]] = i
//     }

//     return [-1, -1]
// }

// console.log(findTwo1(nums, 4));


console.log(typeof new Object());
console.log(new Array() instanceof Array);
console.log(Object.prototype.toString.call('xxxxx').slice(8, -1));
console.log(Array.prototype.constructor === Array);
console.log(Object.getPrototypeOf([]) === Array.prototype);

function myInstanceof(constructor, object) {
    let curObj = Object.getPrototypeOf(object);
    while (true) {
        if (constructor.prototype == curObj) {
            return true;
        }
        curObj = Object.getPrototypeOf(curObj);
        if(!curObj) return false;
    }
}

console.log(myInstanceof(Object,new Object()));