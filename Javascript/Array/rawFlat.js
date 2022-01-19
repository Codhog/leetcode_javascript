// There are six ways to flatten an array 
// 1. IterativeRecursive Method
// function recursiveFlat(arr, depth = 1) {
//   const res = []
//   for (let val of arr) {
//     if (Array.isArray(val) && depth > 0) {
//       res.push(...flat(val, depth - 1))
//     }
//     else {
//       res.push(val)

//     }
//   }
//   return res
// }


// // 2. Iterative Method

// const iterativeFlat = () => {

// }

// function flat(arr, depth = 1) {
//   const res = []
//   const queue = [...arr]
//   let flag = true
//   while (flag) {
//     while (depth > 0) {
//       const head = queue.shift()
//       if (Array.isArray(head)) {
//         res.push(...head)
//       }
//       else {
//         res.push(head)
//       }
//       depth--
//       console.log(depth)
//       flag = queue.some((val) => Array.isArray(val))

//     }
//     if (flag || depth < 1) {
//       return res
//     }
//   }
// }

function bfsflat(arr, depth = 1) {
  // your imeplementation here
  const res = []
  const queue = [...arr.map(val=>[val, 1])]

  // console.log(queue);
  while(queue.length){
    const [element, elementDepth] = queue.shift()
    if( Array.isArray(element) && elementDepth > 0){
      queue.unshift(...element.map(elementValue=>[elementValue, elementDepth-1]))
    }
    else{
      res.push(element)
    }
  }
  console.log(res);
}


const arr = [1, [2], [3, [4]]];

bfsflat(arr)
// [1, 2, 3, [4]]

bfsflat(arr, 1)
// [1, 2, 3, [4]]

bfsflat(arr, 2)
