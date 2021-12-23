var sortColors = function(nums) {
    let [i,j] = [0, 1]
    for(let i=0;i<nums.length;i++){
        for(let j=0;j<nums.length-i;j++){
            if(nums[j]>nums[j+1]){
                [nums[j],nums[j+1]] = [nums[j+1], nums[j]]
            }
            
        }
    }
    return nums
};  

console.log(sortColors([1,1,0,2]));