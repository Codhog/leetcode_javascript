/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var findKthLargest = function(nums, k) {
    let arrnums =  Array.from(new Set(nums.sort((a,b)=>b-a)))
    console.log(arrnums);
    console.log(arrnums[k-1]);
};
console.log(findKthLargest(
    [3,2,3,1,2,4,5,5,6],4));