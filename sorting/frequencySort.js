var frequencySort = function(s) {
    const arr = s.split('')
    let map = new Map()
    arr.forEach(v=>map.set(v,map.get(v) + 1||1))
    return Array.from(map.entries()).sort((a,b)=>b[1]-a[1]).reduce(myReducer, '')

};  

const myReducer = (prev,cur)=>{
    let sum = ''
    for(let i=0;i<cur[1];i++){
        sum+=cur[0]
    }
    return prev + sum
    
}


console.log(frequencySort("Aabb"));