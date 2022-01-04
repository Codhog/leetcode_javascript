/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

  // Native Sort Approach

//  var findKthLargest = function(nums, k) {
//     let arrnums =  Array.from(new Set(nums.sort((a,b)=>b-a)))
//     console.log(arrnums);
//     console.log(arrnums[k-1]);
// };

  // Quick Sort Approach
var findKthLargest = function(nums, k) {
    console.log(quicksort(nums));
    return quicksort(nums)[k-1]
};

function quicksort(array) {
  if (array.length <= 1) {
    return array;
  }

  var pivot = array[0];
  
  var left = []; 
  var right = [];

  for (var i = 1; i < array.length; i++) {
    array[i] < pivot ? left.push(array[i]) : right.push(array[i]);
  }

  return quicksort(right).concat(pivot, quicksort(left));
};



// Heap Sort Approach in next file

console.log(findKthLargest([3,2,1,5,6,4],2));