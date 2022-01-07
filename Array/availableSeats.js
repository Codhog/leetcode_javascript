// function getMaxAdditionalDinersCount(N, K, M, S) {
//     // Write your code here
//       const available = []
//       const ans = []
//     for(let i=0;i<N;i++){
//       available.push(i+1)
//   }
//     console.log(available);
//     for(let i=0;i<N;i++){
//       for(let j=0;j<S.length;j++){
//         if(checkAvailable(available[i], S[j], K)){
//           ans.push(available[i])
//         }
//       }
//     }
//     return ans.length;
//   }

//   function checkAvailable(newComer, old, k){
//     return [newComer-k, newComer+k].includes(old)
//   }

function getMaxAdditionalDinersCount(N, K, M, S) {
    S.sort((a, b) => a - b)
    
    let guests = 0
    let start = 1
    let range = null

    for (const seatedDiner of S) {
        range = seatedDiner - start
        guests += Math.floor(range / (K + 1))
        start = seatedDiner + K + 1
    }

    range = N - start + 1
    guests += Math.ceil(range / (K + 1))

    return guests
}
getMaxAdditionalDinersCount(10, 1, 2, [2,6])
  