// defineProperty 版本

// 数据
let obj = { text: 'default' }
let input = document.getElementById('input')
let span = document.getElementById('span')
// 数据劫持
Object.defineProperty(obj, 'text', {
    configurable: true,
    enumerable: true,
    get() {
        console.log('获取数据了')
    },
    // 数据变化 --> 修改视图
    set(newVal) {
        console.log('数据更新了')
        input.value = newVal
        span.innerHTML = newVal
    }
})
// 输入监听 视图更改 --> 数据变化
input.addEventListener('keyup', function (e) {
    obj.text = e.target.value
})

// proxy 版本
// 数据
const data = {
    text: 'default'
};
const input = document.getElementById('input');
const span = document.getElementById('span');
// 数据劫持
const handler = {
    set(target, key, value) {
        target[key] = value;
        // 数据变化 --> 修改视图
        input.value = value;
        span.innerHTML = value;
        return value;
    }
};
const proxy = new Proxy(data, handler);

// 视图更改 --> 数据变化
input.addEventListener('keyup', function (e) {
    proxy.text = e.target.value;
});

