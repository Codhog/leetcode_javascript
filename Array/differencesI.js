var heightChecker = function(heights) {
    // Compare the differences of two array
    //output their differeces in index
    const expected = [...heights].sort((a,b)=>a-b)
    let counter = 0
    heights.forEach((heightVal, index)=>{
        console.log(heightVal, expected[index]);
        if(heightVal!==expected[index]){
            counter++
        }
    })
    return counter
};
heightChecker([5,1,2,3,4])
