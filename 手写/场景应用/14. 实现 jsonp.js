// 利用<script>标签不受跨域限制的特点，缺点是只能支持 get 请求

// 创建script标签
// 设置script标签的src属性，以问号传递参数，设置好回调函数callback名称
// 插入到html文本中
// 调用回调函数，res参数就是获取的数据
function jsonp({ url, params, callback }) {
    return new Promise((resolve, reject) => {
        let script = document.createElement('script')

        window[callback] = function (data) {
            resolve(data)
            document.body.removeChild(script)
        }
        var arr = []
        for (var key in params) {
            arr.push(`${key}=${params[key]}`)
        }
        script.type = 'text/javascript'
        script.src = `${url}?callback=${callback}&${arr.join('&')}`
        document.body.appendChild(script)
    })
}


function jsonp(url, params, callback) {
    // 生成唯一的回调函数名
    const callbackName = 'jsonp_' + Date.now();

    // 将参数拼接到 URL 中
    const queryString = Object.keys(params)
        .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(params[key]))
        .join('&');

    // 创建 script 元素
    const script = document.createElement('script');
    script.src = url + '?' + queryString + '&callback=' + callbackName;

    // 定义回调函数
    window[callbackName] = function (data) {
        // 调用回调函数
        callback(data);

        // 删除 script 元素和回调函数
        document.head.removeChild(script);
        delete window[callbackName];
    };

    // 将 script 元素添加到页面中
    document.head.appendChild(script);
}

jsonp('http://www.example.com/api', { user: 'admin' }, function (data) {
    console.log(data);
});



// 动态的加载js文件
function addScript(src) {
    const script = document.createElement('script');
    script.src = src;
    script.type = "text/javascript";
    document.body.appendChild(script);
}
addScript("http://xxx.xxx.com/xxx.js?callback=handleRes");
// 设置一个全局的callback函数来接收回调结果
function handleRes(res) {
    console.log(res);
}
// 接口返回的数据格式
handleRes({ a: 1, b: 2 });