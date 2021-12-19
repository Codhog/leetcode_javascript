function rotateArray(A, K) {
    // write your code in JavaScript (Node.js 8.9.4)
    let counter = 0
    while(counter<K){
        for(let i=0;i<A.length-1;i++){
            let temp = A[i]
            A[i] = A[i+1]
            A[i+1] = temp
            console.log(A, 'Asd');
        }
        counter++
    }
    return A
}

let ans = rotateArray([3, 8, 9, 7, 6], 3)
console.log(ans);