const URL = 'https://api.hatchways.io/assessment/students'

function firstPro(){
    let n = 0
    return new Promise(function(resolve, reject){
        resolve(++n)
    })
}

const myFetch = (num) =>{
    return new Promise((resolve, reject)=>{
        resolve(++num)
    })
}

firstPro().then((data)=>console.log(data))