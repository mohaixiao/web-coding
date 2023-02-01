Array.prototype.myEvery = function (callback, context = window) {
  var len = this.length,
    flag = true,
    i = 0;

  for (; i < len; i++) {
    if (!callback.apply(context, [this[i], i, this])) {
      flag = false;
      break;
    }
  }
  return flag;
};
let arr = [13, 14, 0];
var obj = { num: 1 };
var aa = arr.myEvery(function (v, index, arr) {
  return v >= obj.num;
}, obj);
console.log(aa);
