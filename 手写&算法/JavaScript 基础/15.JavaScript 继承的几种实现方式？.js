// 我了解的 js 中实现继承的几种方式有：

// （1）第一种是以原型链的方式来实现继承，但是这种实现方式存在的缺点是，在包含有引用类型的数据时，会被所有的实例对象所共享，容易造成修改的混乱。还有就是在创建子类型的时候不能向超类型传递参数。

// 共享 + 不能传参
function SuperType() {
    this.property = true;
}
SuperType.prototype.getSuperValue = function () {
    return this.property;
};
function SubType() {
    this.subproperty = false;
}
// 继承 SuperType 
SubType.prototype = new SuperType();
SubType.prototype.getSubValue = function () {
    return this.subproperty;
};
let instance = new SubType();
console.log(instance.getSuperValue()); // true

// （2）第二种方式是使用借用构造函数的方式，这种方式是通过在子类型的函数中调用超类型的构造函数来实现的，这一种方法解决了不能向超类型传递参数的缺点，但是它存在的一个问题就是无法实现函数方法的复用，并且超类型原型定义的方法子类型也没有办法访问到。

// 函数方法不能复用

function SuperType(name) {
    this.name = name;
}
function SubType() {
    // 继承 SuperType 并传参
    SuperType.call(this, "Nicholas");
    // 实例属性
    this.age = 29;
}
let instance = new SubType();
console.log(instance.name); // "Nicholas"; 
console.log(instance.age); // 29

// （3）第三种方式是组合继承，组合继承是将原型链和借用构造函数组合起来使用的一种方式。
//     通过借用构造函数的方式来实现类型的属性的继承，通过将子类型的原型设置为超类型的实例来实现方法的继承。
//     这种方式解决了上面的两种模式单独使用时的问题，但是由于我们是以超类型的实例来作为子类型的原型，所以调用了两次超类的构造函数，
//     造成了子类型的原型中多了很多不必要的属性。

// 原型选择弊端

function SuperType(name) {
    this.name = name;
    this.colors = ["red", "blue", "green"];
}
SuperType.prototype.sayName = function () {
    console.log(this.name);
};
function SubType(name, age) {
    // 继承属性
    SuperType.call(this, name);
    this.age = age;
}
// 继承方法
SubType.prototype = new SuperType();
SubType.prototype.sayAge = function () {
    console.log(this.age);
};

// test
let instance1 = new SubType("Nicholas", 29);
instance1.colors.push("black");
console.log(instance1.colors); // "red,blue,green,black" 
instance1.sayName(); // "Nicholas"; 
instance1.sayAge(); // 29 
let instance2 = new SubType("Greg", 27);
console.log(instance2.colors); // "red,blue,green" 
instance2.sayName(); // "Greg"; 
instance2.sayAge(); // 27

// （4）第四种方式是原型式继承，原型式继承的主要思路就是基于已有的对象来创建新的对象，实现的原理是，
//     向函数中传入一个对象，然后返回一个以这个对象为原型的对象。这种继承的思路主要不是为了实现创造一种新的类型，
//     只是对某个对象实现一种简单继承，ES5 中定义的 Object.create() 方法就是原型式继承的实现。缺点与原型链方式相同。

function object(o) {
    function F() { }
    F.prototype = o;
    return new F();
}

// （5）第五种方式是寄生式继承，寄生式继承的思路是创建一个用于封装继承过程的函数，通过传入一个对象，
//     然后复制一个对象的副本，然后对象进行扩展，最后返回这个对象。这个扩展的过程就可以理解是一种继承。
//     这种继承的优点就是对一个简单对象实现继承，如果这个对象不是我们的自定义类型时。缺点是没有办法实现函数的复用。

function createAnother(original) {
    let clone = object(original); // 通过调用函数创建一个新对象
    clone.sayHi = function () { // 以某种方式增强这个对象
        console.log("hi");
    };
    return clone; // 返回这个对象
}

// （6）第六种方式是寄生式组合继承，组合继承的缺点就是使用超类型的实例做为子类型的原型，导致添加了不必要的原型属性。
//   寄生式组合继承的方式是使用超类型的原型的副本来作为子类型的原型，这样就避免了创建不必要的属性。

function inheritPrototype(SubType, SuperType) {
    SubType.prototype = Object.create(SuperType.prototype);
    // SubType.prototype.constructor = SubType;
    // 最好这样恢复 constructor 属性
    Object.defineProperty(SubType.prototype, "constructor", {
        enumerable: false,
        value: SubType
    });
}

function SuperType(name) {
    this.name = name;
    this.colors = ["red", "blue", "green"];
}

SuperType.prototype.sayName = function () {
    console.log(this.name);
};

function SubType(name, age) {
    SuperType.call(this, name); this.age = age;
}

inheritPrototype(SubType, SuperType);

SubType.prototype.sayAge = function () {
    console.log(this.age);
};

// （7）ES6继承 extends
