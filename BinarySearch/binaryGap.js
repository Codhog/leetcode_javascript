let binaryGap = function(N){
    
    // console.log(parseInt(N.toString(2)));
    console.log(N.toString(2));
    console.log((100101000000000).toString(2).split('1'));
    const arr = N.toString(2).split('1')
    if(arr.length===2)return 0
    if(arr%2==0){
        arr.pop()
    }
    let max = 0
    for(let i=0;i<arr.length;i++){
        max = arr[i].length>max?arr[i].length:max
    }
    console.log(`max:${max}`);
}

binaryGap(51712)