//  [1,0,1,1,0,0,1,0] 使其改变成[0,0,0,0,1,1,1,1] 零放前面，时间复杂度为O(n),空间复杂度为O(1).js

let arr = [1, 0, 1, 1, 0, 0, 1, 0]

function Foo(arr) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        if (arr[left] == 1 && arr[right] == 0) {
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++
            right--
        } else if (arr[left] == 0) {
            left++
        } else if (arr[right] === 1) {
            right--
        }
    }
    console.log(arr);
    return arr
}

Foo(arr)