Array.prototype.mySort = function (compareFn) {
    // 如果未传入比较函数，则使用默认比较方式
    if (typeof compareFn !== 'function') {
        compareFn = function (a, b) {
            return String(a) <= String(b) ? -1 : 1;
        };
    }
    // 使用冒泡排序法对数组进行排序
    for (let i = 0; i < this.length; i++) {
        for (let j = 0; j < this.length - i - 1; j++) {
            if (compareFn(this[j], this[j + 1]) > 0) {
                // 如果需要交换，则进行交换操作
                let temp = this[j];
                this[j] = this[j + 1];
                this[j + 1] = temp;
            }
        }
    }
    // 返回排序后的数组
    return this;
};


// 定义了一个新的方法 mySort()，它接受一个可选参数 compareFn，用于指定比较函数。首先，如果未传入比较函数，则使用默认的比较方式，它将元素转换为字符串形式，然后按照 Unicode 码点进行比较。接下来，使用冒泡排序法对数组进行排序，根据传入的比较函数进行元素的交换和排序操作。最后，返回排序后的数组。

// 需要注意的是，在实际开发中，上述实现可能并不是最优的。在处理大型数组时，可能需要采用更快、更高效的排序算法来提高排序速度；而在特定场景下，可能需要自定义比较函数来实现特定的排序需求。因此，在使用该方法时，需要根据具体情况进行评估，并进行必要的性能优化和功能扩展。