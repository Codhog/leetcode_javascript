var sortArrayByParity = function(nums) {
    let index = 0
    for(let i=0;i<nums.length;i++){
        if(nums[i]%2==0){
            [nums[index], nums[i]] = [nums[i], nums[index]]
            index++
        }
    }
    return nums
};

// Input: nums = [3,1,2,4]
// Output: [2,4,3,1]
// Explanation: The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.