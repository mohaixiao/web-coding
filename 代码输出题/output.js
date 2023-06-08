//  1

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


// 2

console.log("script start");

const promiseA = new Promise((resolve, reject) => {
    console.log("init promiseA");
    resolve("promiseA");
});

const promiseB = new Promise((resolve, reject) => {
    console.log("init promiseB");
    resolve("promiseB");
});

setTimeout(() => {
    console.log("setTimeout run");
    promiseB.then(res => {
        console.log("promiseB res :>> ", res);
    });
    console.log("setTimeout end");
}, 500);

promiseA.then(res => {
    console.log("promiseA res :>> ", res);
});

console.log("script end");

// 3
function foo() {
    setTimeout(() => {
        console.log('id;', this.id)
    }, 100);
}
var id = 21;
foo.call({ id: 42 })
function foo() {
    setTimeout(() => {
        console.log('id:', this.id)
    }, 100)
};
var id = 21;
foo();

// 4 

let a = 10;
const b = () => {
    a = 11;
    console.log(a);
    return;
    function a() { }
}
b()
console.log(a)


var a = 10
function b() {
    a = 11;
    console.log(a);
    return;
    function a() { }
}

// 5
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


//======================》 6 
x()
var x = function () {
    console.log(2);
}
x()
function x() {
    console.log(1);
}
x()

//======================》 7
var a = function () { this.b = 3 }
c = new a()
a.prototype.b = 9
var b = 7
a()
console.log(b)//3 
console.log(c.b)//3 

// 都是window.b


//======================》 8
const obj = {
    foo: 1,
    bar: () => {
        return this.foo;
    }
}

console.log(obj.bar());


//======================》 9
console.log(1)

const promise = new Promise((resolve) => {
    console.log(2);
    resolve();
    console.log(3);
})
console.log(4)
promise.then(() => {
    console.log(5);
}).then(() => {
    console.log(6)
})

setTimeout(() => {
    console.log(8);
}, 10)

setTimeout(() => {
    console.log(9);
}, 0)


//======================》 9
for (var i = 0; i < 5; i++) {
    setTimeout(() => {
        console.log(i)
    }, 1000)
}


//======================》 10
var name = 'window'
var bar = {
    name: 'bar',
    printName: function () {
        console.log(name)
    }
}
var _printName = bar.printName
_printName()//window
bar.printName()//window
// ****************************************************
var name = 'window'
var bar = {
    name: 'bar',
    printName: function () {
        console.log(this.name)
    }
}
var _printName = bar.printName
_printName()//window
bar.printName()//bar

//======================》 11
class demo {
    constructor() {
        this.name = 'demo';
        console.log(this.name);
    }

    getName() {
        console.log('111' + this.name);
    }
}

demo.prototype.getName = () => {
    console.log('222' + this.name);
}

let a = new demo();
a.getName();

// demo
// 222

//======================》 12
// mock fun
let num = 1;
const add = () => { return num++; };
// mock request
const mpromise = (cb, time) => {
    return () => {
        return new Promise((resolve) => {
            setTimeout(async () => {
                const res = await cb();
                console.log(time);
                resolve(res);
            }, time);
        });
    };
};
const pList = [mpromise(add, 2000), mpromise(add, 1000), mpromise(add, 2500)];
// core
const pIteratorLimit = (pList) => {
    // TODO
};
const pRecursion = (pList) => {
    // TODO
};
pRecursion(pList);

//  ==================================== > 13
function fn1() {
    console.log(this)
}
var obj = { fn() { console.log(this) }, fn1: fn1 }
var fn2 = obj.fn
var fn3 = obj.fn1.bind(obj)

fn1() // window
fn2() // window
fn3()  // obj
obj.fn() // obj
obj.fn1() // obj