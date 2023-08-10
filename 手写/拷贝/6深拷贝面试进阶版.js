// 针对能够遍历对象的不可枚举属性以及 Symbol 类型，我们可以使用 Reflect.ownKeys 方法；
// 当参数为 Date、RegExp 类型，则直接生成一个新的实例返回；
// 利用 Object 的 getOwnPropertyDescriptors 方法可以获得对象的所有属性，以及对应的特性，顺便结合 Object.create 方法创建一个新对象，并继承传入原对象的原型链；
// 利用 WeakMap 类型作为 Hash 表，因为 WeakMap 是弱引用类型，可以有效防止内存泄漏（你可以关注一下 Map 和 weakMap 的关键区别，这里要用 weakMap），作为检测循环引用很有帮助，如果存在循环，则引用直接返回 WeakMap 存储的值

const isComplexDataType = (obj) =>
  (typeof obj === "object" || typeof obj === "function") && obj !== null;

const deepClone = function (obj, hash = new WeakMap()) {
  if (obj.constructor === Date) {
    return new Date(obj); // 日期对象直接返回一个新的日期对象
  }

  if (obj.constructor === RegExp) {
    return new RegExp(obj); //正则对象直接返回一个新的正则对象
  }

  //如果循环引用了就用 weakMap 来解决
  if (hash.has(obj)) {
    return hash.get(obj);
  }
  let allDesc = Object.getOwnPropertyDescriptors(obj);
  //   返回一个包含指定对象所有自身属性的属性描述符对象。
  // 其中，属性描述符对象是以属性名为键，属性描述符对象为值的形式存储的。
  //遍历传入参数所有键的特性

  let cloneObj = Object.create(Object.getPrototypeOf(obj), allDesc);
  console.log(allDesc, "xxx");
  // 把cloneObj原型复制到obj上
  hash.set(obj, cloneObj);

  for (let key of Reflect.ownKeys(obj)) {
    cloneObj[key] =
      isComplexDataType(obj[key]) && typeof obj[key] !== "function"
        ? deepClone(obj[key], hash)
        : obj[key];
  }
  return cloneObj;
};

var o = {};
o.x = o;
var o1 = deepClone(o); // 如果这个对象拷贝过了 就返回那个拷贝的结果就可以了
console.log(o1);


// 解决拷贝循环引用问题
// 解决拷贝对应原型问题

// 递归拷贝 (类型判断)
function deepClone(value, hash = new WeakMap()) {
  // 弱引用，不用map，weakMap更合适一点
  // null 和 undefiend 是不需要拷贝的
  if (value == null) {
    return value;
  }
  if (value instanceof RegExp) {
    return new RegExp(value);
  }
  if (value instanceof Date) {
    return new Date(value);
  }
  // 函数是不需要拷贝
  if (typeof value != "object") return value;
  let obj = new value.constructor(); // [] {}
  // let newObj = Array.isArray(object) ? [] : {};
  // 说明是一个对象类型
  if (hash.get(value)) {
    return hash.get(value);
  }
  hash.set(value, obj);
  for (let key in value) {
    // in 会遍历当前对象上的属性 和 __proto__指代的属性
    // 补拷贝 对象的__proto__上的属性
    if (value.hasOwnProperty(key)) {
      // 如果值还有可能是对象 就继续拷贝
      obj[key] = deepClone(value[key], hash);
    }
  }
  return obj;
  // 区分对象和数组 Object.prototype.toString.call
}

var o = {};
o.x = o;
var o1 = deepClone(o); // 如果这个对象拷贝过了 就返回那个拷贝的结果就可以了
console.log(o1);
