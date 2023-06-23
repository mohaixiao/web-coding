// 分别用深度优先遍历（DFS）和广度优先遍历（BFS）查找  document.body  下面所有 class 为 a 的 dom 节点。 就是实现一下 document.querySelectorAll('.a') 的功能


// [深度优先遍历DFS和广度优先遍历BFS查找document.body下面所有class为a的dom节点_屈小康的博客-CSDN博客](https://blog.csdn.net/qq_45557681/article/details/131041335)

function findNodeByClassDeep(node, className) {
    let result = [];
    if (node.classList && node.classList.contains(className)) {
        // classList.contains 确定元素中是否包含指定的类名，返回true/false
        result.push(node);
    }
    let children = node.children;
    for (let i = 0; i < children.length; i++) {
        result = result.concat(findNodeByClassDeep(children[i], className))
    }
    return result;

}
findNodeByClassDeep(document.body, 'a')


function findNodesByClassWide(node, className) {
    let result = [];
    let queue = [node];
    while (queue.length) {
        let cur = queue.shift();
        if (cur.classList && cur.classList.contains(className)) {
            result.push(cur);
        }
        let children = cur.children;
        for (let i = 0; i < children.length; i++) {
            queue.push(children[i]);
        }
    }
    return result;
}

let nodes = findNodesByClassWide(document.body, 'li');


