// First Try
var longestCommonPrefix = function(strs) {
    let size = strs.length
    if(strs.length===1) return strs[0]
    let j = 0, bool = true
    while(bool){
       for(let i=0;i<size-1;i++){
           if(i===size-2) bool = false
           if(strs[i][j]!==strs[i+1][j]){
               bool = false
           }
        } 
        j++
    }
    return strs[0].substring(0, j-1)
    
};
var longestCommonPrefix = function(strs) {
    if(strs.length===1) return strs[0]
    for(let i=0;i<strs[0].length;i++){
        let c = strs[0].charAt(i)
        for(let j=0;j<strs.length;j++){
            if(i===strs[j].length || strs[j].charAt(i)!==c){
                return strs[0].substring(0, i)
            }
        }
    }

    return strs[0]
    
};

console.log(longestCommonPrefix(["flower","flow","flight"]));