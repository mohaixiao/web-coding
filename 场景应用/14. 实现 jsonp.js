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