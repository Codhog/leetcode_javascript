// function solution(A) {
//     // write your code in JavaScript (Node.js 8.9.4)
//     A.sort()

//     let ans;
//     let run = true
//     let counter = 0
//     while (run) {
//         console.log(run);
//         for (let i = 0; i < A.length; i++) {
//             console.log(A[i], A[i + 1], A[i] !== A[i + 1]);
//             if (A[i] !== A[i + 1] && A[i + 1]) {
//                 ans = A[i]
//                 counter++
//                 if(counter ==2){
//                     run=false
//                     break;
//                 }
//             }
//         }
//     }

//     return ans

// }

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let map = new Map()
    for(let i=0;i<A.length;i++){
        if(!map.has(A[i])){
            map.set(A[i], 1)
        }
        else{
            map.set(A[i], map.get(A[i])+1)
        }
    }
    for(const item of map){
        if(item[1] === 1){
            return item[0]
        }

    }
    
}

let ans = solution([2, 1, 1, 2, 3, 1])
console.log(ans);