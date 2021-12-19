
// function solution(X, A) {
//     if (A.length<0&&!A.includes(X)) return null
//     if (A.length===1) return A[0]
//     return A.findIndex((val)=>val===X)
// }
function solution(X, A) {
    let set = new Set()
    for(let i=0;i<A.length;i++){
        set.add(A[i])
        if(set.size===X)return i
    }
}
let ans = solution(5, [1, 3, 1, 4, 2, 3, 5, 4]);
console.log(ans);
