// var topKFrequent = function(nums, k) {
//     if(nums.length<2)return nums

//     let map = {}
    
//     for(let i of nums){
//         map[nums[i]] = (map[nums[i]]||0)+1
//     }
//     console.log(map);
//     return Object.entries(map).sort((a,b)=>b[1]-a[1]).map(v=>v[0]).slice(0,k)

// };


var topKFrequent = function(nums, k) {
    
    // O(1) time, because nums are unique!
  if (k == nums.length) {
      return nums;
  }
  
  let map = new Map();
  
  nums.forEach(n => map.set(n, map.get(n) + 1 || 1));
  
  return [...map.entries()] // produces 2d array
      .sort((a,b) => b[1] - a[1]) 
      .map(([k,v]) => k ) // .map(x => x[0]) also works
      .slice(0, k);
};
console.log(topKFrequent([-1,-1],4));

// let a = [1]
// console.log(a.sort());