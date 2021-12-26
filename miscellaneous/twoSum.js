var twoSum = function(nums, target) {
    let map = new Map()
    return nums.forEach((val, index)=>{
        !map.get(val) && map.set(val,target-val)
        if(map.get(target-val)) return [map.get(target-val), index]
    })
    
};