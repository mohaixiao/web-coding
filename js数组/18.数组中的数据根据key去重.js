// 给定一个任意数组，实现一个通用函数，让数组中的数据根据 key 排重：

const dedup = (data, getKey = () => { }) => {
    // todo
}
let data = [
    { id: 1, v: 1 },
    { id: 2, v: 2 },
    { id: 1, v: 1 },
];

// 以 id 作为排重 key，执行函数得到结果
// data = [
//   { id: 1, v: 1 },
//   { id: 2, v: 2 },
// ];

//   实现

const dedup = (data, getKey = () => { }) => {
    const dateMap = data.reduce((pre, cur) => {
        const key = getKey(cur)
        if (!pre[key]) {
            pre[key] = cur
        }
        return pre
    }, {})
    return Object.values(dateMap)
}


//   使用

let data = [
    { id: 1, v: 1 },
    { id: 2, v: 2 },
    { id: 1, v: 1 },
];
console.log(dedup(data, (item) => item.id))

  // 以 id 作为排重 key，执行函数得到结果
  // data = [
  //   { id: 1, v: 1 },
  //   { id: 2, v: 2 },
  // ];
