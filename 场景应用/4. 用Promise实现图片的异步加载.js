// 只需要在图片的onload函数中，使用resolve返回一下就可以了

let imageAsync = (url) => {
    return new Promise((resolve, reject) => {
        let img = new Image();
        img.src = url;
        img.onload = (image) => {
            console.log(`图片请求成功，此处进行通用操作`);
            resolve(image);
        }
        img.onerror = (err) => {
            console.log(`失败，此处进行失败的通用操作`);
            reject(err);
        }
    })
}

imageAsync("https://t7.baidu.com/it/u=1595072465,3644073269&fm=193&f=GIF").then((img) => {
    console.log("加载成功", img);
}).catch((error) => {
    console.log("加载失败", error);
})


