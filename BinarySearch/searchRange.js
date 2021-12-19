var searchTarget = function(nums, target) {
  let [i,j] = [0, nums.length-1]
  while(i<j){
      let mid = i+Math.floor((j-i)/2)
      if(nums[mid] > target){
          i = mid + 1
      }
      else{
          j = mid
      }
  }  
  console.log(`i is : ${i}`);
  return i
};

var searchRange = function(nums, target){
    let first = searchTarget(nums, target)
    let last = searchTarget(nums, target+1) - 1
    console.log(first, last);
    // if(nums.length<2||nums[0]!==target){
    //     return [-1,-1]
    // }
    // else{
    //     return [first,  Math.max(first, last)]
    // }
}


console.log(searchRange([5,7,7,8,8,10], 6));