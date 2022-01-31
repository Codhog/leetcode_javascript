var checkIfExist = function(arr) {
    let seen = new Set()
    for(let val of arr){
        seen.add(val)
        if(seen.has(val*2)||seen.has(val/2)){
            return true
        }
        
    }
    return false
};