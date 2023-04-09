function findAllInputElement(element) {
    const rec = function (element, arr) {
        // 元素本身是input
        if (element.nodeName.toUpperCase() === "INPUT") {
            arr.push(element)
        }
        // 子节点遍历是input
        let children = element.childNodes
        children.forEach(element => {
            rec(element, arr)
        });
        return arr
    }
    return rec(element, [])
}