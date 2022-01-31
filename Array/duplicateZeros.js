/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
 var duplicateZeros = function(arr) {
    let i=0, len = arr.length
    while(i<=len){
        if(arr[i]===0){
            arr.splice(i-1,0,0)
            arr.splice(len-1,1)
            console.log(arr);
            i++
        }
        i++
    }
};
duplicateZeros([1,0,2,0,3,4])
// console.log(duplicateZeros(1,0,2,3,4));