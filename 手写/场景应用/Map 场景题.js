const arrs = [
    {
        name: "可乐",
        categories: ["热门", "饮料"],
    },
    {
        name: "苹果",
        categories: ["热门", "食物"],
    },
    {
        name: "洗衣液",
        categories: ["生活用品"],
    },
];

let map = new Map();
const res = [];
for (const arr of arrs) {
    const { name, categories } = arr;
    for (const category of categories) {
        if (!map.has(category)) map.set(category, [name]);
        else {
            let val = map.get(category);
            val.push(name);
            map.set(category, val);
        }
    }
}
map.forEach((key, val) => {
    res.push({ name: val, categories: key });
});
console.log(res);