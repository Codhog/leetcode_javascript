const sa = "A man, a plan, a canal: Panama"
var isPalindrome = function(s) {
    // var str = s.toLowerCase().replace(/[^a-z]+/g,"");
    // var str = s.toLowerCase().replace(/[^a-z]+|\d+/g,"");
    let arr = s.toLowerCase().match(/[a-z0-9]/ig)
    console.log(arr);
    // let arr = str.split('')
    let j = arr.length-1
    for (let i = 0; i < j; i++) {
        // console.log(arr[i],arr[j], arr[i]!==arr[j]);
        if(arr[i]!==arr[j]){
            return false
        }
        else{
            j--
        }
    }
    return true
};


let ans = isPalindrome(sa)
console.log(ans);