// 视频链接：https://www.bilibili.com/video/BV1XL4y1t7kF/?spm_id_from=333.337.search-card.all.click&vd_source=037b856144283671f89f562ed7eeb263

// 题目
let url = 'http://www.domain.com/?user=anonymous&id=123&id=456&city=%E5%8C%97%E4%BA%AC&enabled';
parseParam(url)
/* 结果
{ user: 'anonymous',
  id: [ 123, 456 ], // 重复出现的 key 要组装成数组，能被转成数字的就转成数字类型
  city: '北京', // 中文需解码
  enabled: true, // 未指定值得 key 约定为 true
}
*/

// 简单版本

let url = 'https://campus.meituan.com/index?key=value&key2=value2';
function abstractPara(url) {
    const obj = {};
    url.slice(url.indexOf('?') + 1).split('&').forEach(item => {
        const [key, value] = item.split('=');
        obj[key] = value;
    })
    return obj;
}

console.log(abstractPara(url));

let url = 'http://www.domain.com/?user=anonymous&id=123&id=456&city=%E5%8C%97%E4%BA%AC&enabled';
//升级版
function parseParam(url) {
    const paramsStr = /.+\?(.+)$/.exec(url)[1]; // 将 ? 后面的字符串取出来
    const paramsArr = paramsStr.split('&'); // 将字符串以 & 分割后存到数组中
    let paramsObj = {};
    // 将 params 存到对象中
    paramsArr.forEach(param => {
        if (/=/.test(param)) { // 处理有 value 的参数
            let [key, val] = param.split('='); // 分割 key 和 value
            val = decodeURIComponent(val); // 解码
            val = /^\d+$/.test(val) ? parseFloat(val) : val; // 判断是否转为数字

            if (paramsObj.hasOwnProperty(key)) { // 如果对象有 key，则添加一个值
                paramsObj[key] = [].concat(paramsObj[key], val);
            } else { // 如果对象没有这个 key，创建 key 并设置值
                paramsObj[key] = val;
            }
        } else { // 处理没有 value 的参数
            paramsObj[param] = true;
        }
    })

    return paramsObj;
}


console.log(parseParam(url));

let url = 'http://www.domain.com/?user=anonymous&id=123&id=456&city=%E5%8C%97%E4%BA%AC&enabled';
//reduce实现
function reduceUrl(url) {
    //1.获取?后的字符串信息
    const [, search] = url.split('?');
    //2.通过&切割字符串，得到一个数组
    const arr = search.split('&');
    // 3.处理数组
    return arr.reduce((accu, str) => {
        let [key, value] = str.split('=');
        if (value) {
            // 中文解码
            value = decodeURIComponent(value);
            // 转换为数字
            value = /^\d+$/.test(value) ? +value : value;
            if (accu.hasOwnProperty(value)) {
                // 表示这个key出现过了，用数组储存多个值对
                accu[key] = [].concat(accu[key], value);
            } else {
                accu[key] = value;
            }
        } else {
            accu[key] = true;
        }

        return accu;
    }, {})
}

console.log(reduceUrl(url));

