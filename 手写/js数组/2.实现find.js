// find 接收一个方法作为参数，方法内部返回一个条件
// find 会遍历所有的元素，执行你给定的带有条件返回值的函数
// 符合该条件的元素会作为 find 方法的返回值
// 如果遍历结束还没有符合该条件的元素，则返回 undefined

var users = [
  { id: 1, name: "张三" },
  { id: 2, name: "张三" },
  { id: 3, name: "张三" },
  { id: 4, name: "张三" },
];

Array.prototype.myFind = function (cb, thisBinding = globalThis) {
  // var callback = function (item, index) { return item.id === 4 }
  // 排除回调非函数情况
  if (typeof cb !== "function") {
    throw new TypeError(`${cb} is not a function`);
  }
  // 排除this为非可迭代对象情况
  if (this == null || typeof this[Symbol.iterator] !== "function") {
    throw new TypeError(`${this} is not a iterable`);
  }
  // 将可迭代对象转换成数组
  const array = [...this];
  for (let i = 0; i < this.length; i++) {
    if (cb.call(thisBinding, array[i], i, this)) {
      return this[i];
    }
  }
};

var ret = users.myFind(function (item, index) {
  return item.id === 2;
});

console.log(ret);



