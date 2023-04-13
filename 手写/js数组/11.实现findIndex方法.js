var users = [
  { id: 1, name: "张三" },
  { id: 2, name: "张三" },
  { id: 3, name: "张三" },
  { id: 4, name: "张三" },
];

Array.prototype.myFindIndex = function (callback) {
  // var callback = function (item, index) { return item.id === 4 }
  for (var i = 0; i < this.length; i++) {
    if (callback(this[i], i)) {
      // 这里返回
      return i;
    }
  }
};

var ret = users.myFind(function (item, index) {
  return item.id === 2;
});

console.log(ret);
