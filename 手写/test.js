function deepUnique(arr) {
    const seen = new Set();
  
    return arr.filter((item) => {
      if (typeof item !== 'object' || item === null) {
        // 如果该项是原始类型，直接返回true保留
        return true;
      }
  
      // 否则，遍历该项的属性，对每一个属性进行递归比较
      for (const key in item) {
        const value = item[key];
  
        if (typeof value === 'object' && value !== null) {
          // 遇到嵌套对象或数组，则递归去重
          item[key] = deepUnique([value])[0];
        }
      }
  
      // 将该项转换成字符串，检查是否出现过
      const strItem = JSON.stringify(item);
      if (seen.has(strItem)) {
        // 如果出现过，则过滤掉当前项
        return false;
      } else {
        // 否则，记录该项，并将其保留
        seen.add(strItem);
        return true;
      }
    });
  }
  
  const arr = [
    { a: 2 },
    { a: 2 },
    { a: 2, b: 1 },
    { a: { b: 1, c: { a: 1 } } },
    { a: { b: 1, c: { a: 1 } } }
  ];
  
  console.log(deepUnique(arr)); // [{a: 2}, {a: 2, b: 1}, {a: {b: 1, c: {a: 1}}}]
  