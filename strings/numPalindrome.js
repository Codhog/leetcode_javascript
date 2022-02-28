const isPalindrome = (x) =>{
    const arr = x.toString().split('')
    let i = 0, j = x.toString().length - 1
    while(i<j){
        if(arr[i]!==arr[j]){
            return false
        }
        i++
        j--
    }
    for(let i of 8){
        console.log(i);
    }
    return true
}

console.log(isPalindrome(-123124));
console.log( -1^-1);

