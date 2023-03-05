// 5 用正则写一个根据name获取cookie中的值的方法

// https://juejin.cn/post/7172806083805708296

const getCookie = (key) => {
    const { cookie } = document;
    return cookie.match(new RegExp(`${key}=(?<key>\\w+)`))?.groups?.key;
};


// console.log(document.cookie); 
// 'token=eyJ0eXAiOiJKV1QiJ9ftU; username=FEHub; userOutId=362236'

console.log(getCookie('username'));
// FEHub


// 字符串分割

// console.log(document.cookie); 
// 'token=eyJ0eXAiOiJKV1QiJ9ftU; username=FEHub; userOutId=362236'

const cookieMap = new Map();

document.cookie.split("; ").forEach((cookie) => {
    const [key, value] = cookie.split("=");
    cookieMap.set(key, value);
})

console.log(cookieMap.size);
// 3

console.log(cookieMap.get("username"));
// FEHub
