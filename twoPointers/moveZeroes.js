var moveZeroes = function(nums) {
    //  [1,2,3,0,0] = > [1,2,3,0,0]
    //  [0,3,5,0] = > [3,5,0,0]
    for(let i=0;i<nums.length;i++){
        if(nums[i]===0&&nums[i+1]!==0){
            [nums[i], nums[i+1]] = [nums[i+1], nums[i]]
        }
        
    }
    console.log(nums);
};
moveZeroes([0,3,5,0])