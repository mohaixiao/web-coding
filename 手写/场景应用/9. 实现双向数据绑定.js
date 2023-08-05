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


// 定义一个数据对象
const data = {
    message: 'Hello Vue!',
  };
  
  // 通过Object.defineProperty()劫持数据对象
  Object.defineProperty(data, 'message', {
    get() {
      console.log('访问数据');
      return this._message;
    },
    set(newValue) {
      console.log('更新数据');
      this._message = newValue;
      // 通知订阅者，执行更新操作
      notifySubscribers();
    },
  });
  
  // 定义一个订阅者列表
  const subscribers = [];
  
  // 订阅者订阅数据
  function subscribe(callback) {
    subscribers.push(callback);
  }
  
  // 通知订阅者，执行更新操作
  function notifySubscribers() {
    subscribers.forEach((callback) => {
      callback();
    });
  }
  
  // 订阅者更新视图
  function updateView() {
    console.log('视图更新：', data.message);
  }
  
  // 订阅数据变化
  subscribe(updateView);
  
  // 修改数据，触发更新
  data.message = 'Hello VueJS!';
  