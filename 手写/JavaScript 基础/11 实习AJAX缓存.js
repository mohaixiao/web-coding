const SERVER_URL = "/server";
function getUrl(url) {
    let xhr = new XMLHttpRequest();
    // 创建 Http 请求
    xhr.open("GET", url + Math.random(), true);
    // 设置状态监听函数
    xhr.onreadystatechange = function () {
        if (this.readyState !== 4) return;
        // 当请求成功时
        if (this.status === 200) {
            handle(this.response);
        } else {
            console.error(this.statusText);
        }
    };
    // 设置请求失败时的监听函数
    xhr.onerror = function () {
        console.error(this.statusText);
    };
    // 设置请求头信息
    xhr.responseType = "json";
    xhr.setRequestHeader("Accept", "application/json");
    // 发送 Http 请求
    xhr.send(null);
}


// https://blog.csdn.net/weixin_42407741/article/details/119480824?ops_request_misc=&request_id=&biz_id=102&utm_term=%E5%AE%9E%E7%8E%B0ajax%E7%BC%93%E5%AD%98&utm_medium=distribute.pc_search_result.none-task-blog-2~all~sobaiduweb~default-1-119480824.nonecase&spm=1018.2226.3001.4187