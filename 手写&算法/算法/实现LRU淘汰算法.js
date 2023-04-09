// https://www.bilibili.com/video/BV1ZG4y1b7ef/?spm_id_from=333.337.search-card.all.click&vd_source=037b856144283671f89f562ed7eeb263

// https://juejin.cn/post/7105654083347808263

class LRUCache {
    constructor(length) {
        this.length = length; // 存储长度
        this.data = new Map(); // 存储数据
    }
    // 存储数据，通过键值对的方式
    set(key, value) {
        const data = this.data;

        // 有的话 删除 重建放到map最前面
        if (data.has(key)) {
            data.delete(key)
        }

        data.set(key, value);

        // 如果超出了容量，则需要删除最久的数据
        if (data.size > this.length) {
            // 删除map最老的数据
            const delKey = data.keys().next().value;
            console.log(data.keys().next(), 'key');
            data.delete(delKey);
        }
    }
    // 获取数据
    get(key) {
        const data = this.data;
        // 未找到
        if (!data.has(key)) {
            return null;
        }
        const value = data.get(key); // 获取元素
        data.delete(key); // 删除元素
        data.set(key, value); // 重新插入元素到map最前面

        return value // 返回获取的值
    }
}
var lruCache = new LRUCache(3);


// 测试

// 存储数据 set：

lruCache.set('name', 'test');
lruCache.set('age', 10);
lruCache.set('sex', '男');
lruCache.set('height', 180);
lruCache.set('weight', '120');
console.log(lruCache);