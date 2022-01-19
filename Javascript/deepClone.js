let arr0 = [1,2,3,4,5]

arr1 = arr0.map(val=>val)
arr1[0] = 9
console.log(arr0); //[ 1, 2, 3, 4, 5 ]

arr2 = [...arr0]

arr3 = [].concat(arr0)
arr3[2] = 7
console.log(arr0); //[ 1, 2, 3, 4, 5 ]


const sheeps = ['🐑', '🐑', '🐑'];
// Old way
const cloneSheeps = sheeps.slice();

// ES6 way
const cloneSheepsES6 = [...sheeps];