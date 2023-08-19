// https://leetcode.cn/problems/xuan-zhuan-shu-zu-de-zui-xiao-shu-zi-lcof/?envType=featured-list&envId=xb9nqhhg

/**
 * @param {number[]} numbers
 * @return {number}
 */
// var minArray = function(numbers) {
//     numbers.sort(compare);
//     return numbers[0];
// };
// function compare (a,b) {
//     return a-b;
// }

var minArray = function(numbers) {
    let left = 0,right = numbers.length - 1;
    while(left < right) {
        let mid = Math.floor(left +  (right - left)/2);
        if(numbers[mid] < numbers[right]) {
            right = mid;
        }else if (numbers[mid]> numbers[right]){
            left = mid + 1;
        } else {
            right--;
        }
    } 
    return numbers[left];
};

