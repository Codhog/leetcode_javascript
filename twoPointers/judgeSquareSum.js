var judgeSquareSum = function(c) {
    let i = 0;
    // let j = Math.floor(Math.sqrt(c))
    let j = Math.sqrt(c) << 0
    console.log(j);
    while(i<j){
        let sum = Math.pow(i, 2) +  Math.pow(j, 2)
        console.log(sum);
        if(sum!==c){
            sum>c&&j--
            sum<c&&i++

        }
        else{
            return true
        }
    }
    return false
};

console.log(judgeSquareSum(2));