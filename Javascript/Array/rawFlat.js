// There are six ways to flatten an array 
// 1. IterativeRecursive Method
function recursiveFlat(arr, depth = 1) {
  const res = []
  for(let val of arr){
    if(Array.isArray(val) && depth > 0){
        res.push(...flat(val, depth - 1))
    }
    else{
        res.push(val)

    }
  }
  return res
}


// 2. Iterative Method

const iterativeFlat = () =>{

}

function flat(arr, depth = 1) {
  // your imeplementation here
  const res = []
  const queue = [].concat(arr)
  let flag = false
  while (true) {
    while (queue.length) {
      const item = queue.shift()
      if (Array.isArray(item) && depth) {
        res.push(...item)
      } else {
        res.push(item)
      }
    }
    depth--
    flag = res.some(item => Array.isArray(item))
    if (!flag || !depth) {
      return res
    }
    queue.push(...res)
    res.length = 0
  }
}