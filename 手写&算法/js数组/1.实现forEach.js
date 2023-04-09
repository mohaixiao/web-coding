Array.prototype.myForEach = function (callback, context = globalThis) {
  // this=>arr
  let self = this,
    i = 0,
    len = self.length;

  for (; i < len; i++) {
    typeof callback == "function" && callback.call(context, self[i], i);
  }
};

// test
let arr = [1, 2, 3, 4];
arr.forEach((item) => console.log(item));
arr.myForEach((item) => console.log(item));
