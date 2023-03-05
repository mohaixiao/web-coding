Array.prototype.mySome = function (callback, context = globalThis) {
    var len = this.length,
        flag = false,
        i = 0;

    for (; i < len; i++) {
        if (callback.apply(context, [this[i], i, this])) {
            flag = true;
            break;
        }
    }
    return flag;
}

// var flag=arr.mySome((v,index,arr)=>v.num>=10,obj)
// console.log(flag);
const arr = [10,20.50,60,70,80]
const res = arr.mySome(item => item < 0)
console.log(res)