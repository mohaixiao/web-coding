function objectFlat(obj = {}) {
    const res = {}
    function flat(item, preKey = '') {
        Object.entries(item).forEach(([key, val]) => {
            // 生成新的key
            const newKey = preKey ? `${preKey}.${key}` : key
            // 递归调用
            if (val && typeof val === 'object') {
                flat(val, newKey)
            } else {
                res[newKey] = val
            }
        })
    }
    flat(obj)
    return res
  }
  
  // 测试
  const source = { a: { b: { c: 1, d: 2 }, e: 3 }, f: { g: 2 }, x:'1'}
  console.log(objectFlat(source));