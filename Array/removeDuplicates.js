function removeDup1(arr){
    
    const newArr = []
    arr.forEach((val)=>{
        if(newArr.indexOf(val)===-1){
            newArr.push(val)
        }
    })
    return newArr
}


function removeDup2(arr){
    const obj = {}
    arr.forEach(val => {
        obj[val] = true
    });
    return Object.keys(obj).map((val)=>parseInt(val))
}

function removeDup3(arr){
    let _cache;
    arr.sort()
    for (let i = 0; i < arr.length; i++) {
        
        
    }
}
console.log(removeDup2([2,3,3,3,4,5]));