// 算法题：一个有序的数组，给定一个目标值，找到两个数组中的元素相加为目标值。要求：一次循环；

function findTwoSum(nums, target) {
    let i = 0;
    let j = nums.length - 1;
    while (i < j) {
        let sum = nums[i] + nums[j];
        if (sum === target) {
            return [i, j]
        } else if (sum < target) {
            i++
        } else {
            j--;
        }
    }
}

console.log(findTwoSum([1, 3, 5, 7, 9], 8));