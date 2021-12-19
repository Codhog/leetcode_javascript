var findLongestWord = function(s, dictionary) {
    let max = ""
    for(let i=0;i<dictionary.length;i++){
        if(isSubsequence(dictionary[i], s)){
            if(dictionary[i].length === max.length){
                max = dictionary[i]<max?dictionary[i]:max
            }
            else{
                max = dictionary[i].length>max.length?dictionary[i]:max
            }
            
        }
        
    }
    return max
};

var isSubsequence = function(s, target) {
    let [i, j] = [0,0]
    while(i<s.length&&j<target.length){
        if(s[i]===target[j]){
            i++
        }
        j++
        
    }

    return i===s.length
};
// console.log(  "abe" > "abc");