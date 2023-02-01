//自己实现filter
Array.prototype._filter = function (fn, thisArgs = globalThis) {
  if (typeof fn !== "function") {
    throw Error("参数必须是一个函数");
  }
  const res = [];
  //一定要存一下len
  for (let i = 0, len = this.length; i < len; i++) {
    fn.call(thisArgs, this[i], i, this) && res.push(this[i]);
  }
  return res;
};

//test
const array1 = [3, 4, 5, 6, 7];
let res1 = array1._filter((item, index, data) => {
  return item > 5;
});
console.log(res1);

