var a = [11, 42, 23, 4, 5, 6, 4, 5, 6, 11, 23, 42, 56, 78, 90]

function  oneToThreeArr(arr){
  let res = [{sum: 0, arr: []}, {sum: 0, arr: []}, {sum: 0, arr: []}]
  //从大到小排序,每次把最大的值给到和最小的数组中
  arr = arr.slice().sort((a,b) => b - a);//拷贝一份再排序
  arr.map(item => {
    let min = res.sort((a,b) => a.sum - b.sum)[0];//拿到当前和最小的那个数组
    min.sum += item;
    min.arr.push(item);
  })
  return res;
}
console.log(oneToThreeArr(a));