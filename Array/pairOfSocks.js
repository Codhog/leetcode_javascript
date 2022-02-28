const pairOfSocks = (arr) =>{
    let previous;
    arr.sort()
    return arr.reduce((accu, curr)=>{
        console.log(accu, curr);
        if(curr === previous){
            previous = ''
            accu+=1
        }
        else{
            previous = curr
        }
        return accu
    },0)
}

console.log(pairOfSocks([1,2,1,2,1,3,2]));