function loadImg(src) {
    new Promise((resolve, reject) => {
        let img = new Image()
        img.onload = function () {
            console.log("图片加载成功")
            resolve(img)
        }
        img.error = function () {
            reject(new Error(`Can not load ${src}`))
        }
        img.src = src

    })
}
function timeout() {
    return new Promise((reject) => {
        setTimeout(() => {
            reject("超时")
        }, 3000)
    })
}
//判断图片加载是否超时
Promise.race([loadImg, timeout])
    .then((data) => {
        console.log(data)
    }).catch(err => {
        console.log(err)
    })



// promise.race（） 只要有一个promise 出错就报错
function delay(time) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            rej("超时");
        }, time * 1000);
    });
}
Promise.race([delay(3), requestData(url, "get")])
    .then((res) => {
        console.log("cg", res);
    })
    .catch((err) => {
        console.log("sb", err);
    });








    
    function err(time) {
        return new Promise((reslove, reject) => {
            setTimeout(() => {
                reject(time)
            }, time)
        })
    }
    
    function post(time) {
        return new Promise((reslove, reject) => {
            setTimeout(() => {
                reslove(time)
            }, time)
        })
    }
    
    (async function () {
        let start = new Date();
        let result = await Promise.race([post(4000), err(3000)])
        await console.log(new Date() - start)
        await console.log(result, 'result');
        // 6s
    })();
    
    
    
    