Array.prototype.myCopy = function () {
    // 创建一个空数组，用于存储复制后的元素
    let copyArr = [];
    // 遍历原始数组的元素，依次添加到新数组中
    for (let i = 0; i < this.length; i++) {
        copyArr.push(this[i]);
    }
    // 返回复制后的新数组
    return copyArr;
}


// 在上述代码中，定义了一个新的方法 myCopy()，它不接受任何参数。首先，创建一个空数组 copyArr，用于存储处理后的元素。然后，使用 for 循环遍历原始数组中的元素，依次添加到新数组中，使用 push() 方法实现该操作。最后，返回复制后的新数组。

// 该实现与 Array.prototype.slice() 的原生实现类似，只是关键实现细节略有不同。需要注意的是，由于 JavaScript 中数组是引用类型，因此直接对数组进行复制时，会出现浅拷贝的问题，即新数组中的元素仍然指向原始数组中的同一块内存地址。在实际开发中，可能需要采用深拷贝的方式来解决该问题，以确保元素之间完全独立。