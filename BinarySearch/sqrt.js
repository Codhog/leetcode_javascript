var mySqrt = function(x) {
    // if(x===0)return 0    
    let [i, j] = [1, x]
    let ans;
    // console.log((2+(3-2)/2) << 0);
    while(i<=j){
        let mid = (i+(j-i)/2) << 0
        console.log(`mid is ${mid}`);
        if(mid<=x/mid){
            ans = mid
            i = mid + 1
        }
        else{
            j = mid -1
        }
    }
    return ans
};
 
console.log(mySqrt(8));