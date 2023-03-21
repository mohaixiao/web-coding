/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let l;
    let r;
    for (let i = 0; i < nums.length; i++) {
        l = i;
        for (let j = i + 1; j < nums.length; j++) {
            if (target === nums[i] + nums[j]) {
                r = j;
                return [l, r]
            }
        }
    }
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let hash = new Map()
    for (let i = 0; i < nums.length; i++) {
        if (hash.has(target - nums[i])) {
            return [i, hash.get(target - nums[i])]
        }
        hash.set(nums[i], i)
    }
    return []
};

var twoSum = function (nums, target) {
    let hash = {};
    for (let i = 0; i < nums.length; i++) {
        if (hash[target - nums[i]] !== undefined) {
            return [i, hash[target - nums[i]]];
        }
        hash[nums[i]] = i;
    }
    return [];
};