var majorityElement = function(nums) {
    let currNum = null
    let occur = 0
    for(let num of nums){
        if(occur===0){
            currNum = num
        }
        if(currNum===num){
            occur++
        }
        else{
            occur--
        }
    }
    return currNum
};