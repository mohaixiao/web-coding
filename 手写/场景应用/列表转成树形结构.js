let arr = [
    { id: 1, name: '部门1', pid: 0 },
    { id: 2, name: '部门2', pid: 1 },
    { id: 3, name: '部门3', pid: 1 },
    { id: 4, name: '部门4', pid: 3 },
    { id: 5, name: '部门5', pid: 4 },
    { id: 6, name: '部门6', pid: 0 },
]

// [
//     {
//         "id": 1,
//         "name": "部门1",
//         "pid": 0,
//         "children": [
//             {
//                 "id": 2,
//                 "name": "部门2",
//                 "pid": 1,
//                 "children": []
//             },
//             {
//                 "id": 3,
//                 "name": "部门3",
//                 "pid": 1,
//                 "children": [
//                     {
//                         "id": 4,
//                         "name": "部门4",
//                         "pid": 3,
//                         "children": [
//                             {
//                                 "id": 5,
//                                 "name": "部门5",
//                                 "pid": 4,
//                                 "children": []
//                             }
//                         ]
//                     }
//                 ]
//             }
//         ]
//     },
//     {
//         "id": 6,
//         "name": "部门6",
//         "pid": 0,
//         "children": []
//     }
// ]

// 递归
function getTreeList(arr, pid) {
    let result = [];
    const dfs = (arr, result, pid) => {
        for (const item of arr) {
            if (item.pid === pid) {
                const newObj = { ...item, children: [] };
                result.push(newObj);
                dfs(arr, newObj.children, item.id);
            }
        }
    }
    dfs(arr, result, pid);
    return result;
}
const res = getTreeList(arr, 0);
console.log("res", res);

// map
function getTreeMap(arr) {
    let map = {}
    let result = [];
    for (let item of arr) {
        const id = item.id;
        const pid = item.pid;
        if (!map[id]) {
            map[id] = {
                children: []
            }
        }
        map[id] = { ...item, children: map[id].children };
        if (pid === 0) {
            result.push(map[id]);
        }
        if (!map[pid]) {
            map[pid] = {
                children: []
            }
        }
        map[pid].children.push(map[id]);
    }
    return result;
}
const res1 = getTreeMap(arr);
console.log("res1", res1);



// https://www.bilibili.com/video/BV1mb411X7YY/?spm_id_from=333.337.search-card.all.click&vd_source=037b856144283671f89f562ed7eeb263