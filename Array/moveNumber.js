// Move Numver while keep the original order of   < 50

const moveNumber = (arr) =>{
    let index = 0
    for(let i=0;i<arr.length;i++){
        if(arr[i]<50){
            [arr[i],arr[index]] = [arr[index], arr[i]]
            index++
        }
    }
    return arr
}

console.log(moveNumber([234, 51,52,53,54,1,2,3,4]));

const moveAndSortNumber = (arr) =>{
    let index = 0
    for(let i=0;i<arr.length;i++){
        if(arr[i]<50){
            [arr[i],arr[index]] = [arr[index], arr[i]]
            index++
        }
    }
    return arr
}