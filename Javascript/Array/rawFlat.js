// There are six ways to flatten an array 
// 1. Recursive Method
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


// // 2. Iterative Method I

const iterativeFlat = (arr, depth = 1) => {
  const res = []
  const queue = arr.slice() // deep clone
  let flag = false
  while(true){
    while(queue.length){
      const curr = queue.shift()
      if(Array.isArray(curr)){
        res.push(...curr)
      }
      else{
        res.push(curr)
      }
    }
    depth--
    flag = res.some(val=>Array.isArray(val))// Prevent a flatten array with depth left to be flattened.
    if(!depth || !flag){
      return res
    }
    queue.push(...res)
    res.length=0
  }
}


// 3. Iterative Method II
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
