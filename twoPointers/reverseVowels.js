var reverseVowels = function(s) {
    if(s.length<1)return s
    let varr = ['a','e','i','o','u','A','E','I','O','U']
    s = s.split('')
    let [i, j] = [0, s.length-1]
    while(i<=j){
        if(varr.includes(s[i]) && varr.includes(s[j])){
            let temp = s[i]
            s[i] = s[j]
            s[j] = temp
            i++
            j--
        }
        else if(varr.includes(s[i])){
            j--
        }
        else if(varr.includes(s[j])){
            i++
        }
        else{
            i++
            j--
        }

    }
    return s.join('')
};
console.log(reverseVowels('Hello'));