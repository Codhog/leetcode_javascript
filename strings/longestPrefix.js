// First Try
// var longestCommonPrefix = function(strs) {
//     let size = strs.length
//     if(strs.length===1) return strs[0]
//     let j = 0, bool = true
//     while(bool){
//        for(let i=0;i<size-1;i++){
//            if(i===size-2) bool = false
//            if(strs[i][j]!==strs[i+1][j]){
//                bool = false
//            }
//         } 
//         j++
//     }
//     return strs[0].substring(0, j-1)
    
// };
var longestCommonPrefix = function(strs) {
    let size = strs.length
    if(strs.length===1) return strs[0]
    let str = strs[0]
    for(let i=0;i<strs[0].length;i++){
        for(let j=0;j<strs.length;j++){
            if(strs[j].indexOf(str)>-1){
                console.log(str);
                str = str.substring(0, str.length-1)
            }
            if(str === '') return ''
        }
    }

    return str
    
};

console.log(longestCommonPrefix(["flower","flow","flight"]));