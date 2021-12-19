let ans = [1,1,2]
var removeDuplicates = function(nums) {
    let j = 1
    while(j<nums.length){
        nums.filter((val)=>{
            if(val===nums[j]){
                return false
            }

        })
        j++
    }
    
};
removeDuplicates(ans)
console.log(ans);