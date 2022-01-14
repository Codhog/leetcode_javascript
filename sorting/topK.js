function topK(arr, k) {
    // your code here
    let myHeap = new Heap(arr)
    arr.forEach((val)=>{
      myHeap.insert(val)
      if(myHeap.length>k){
        myHeap
      }
    })
    // console.log(myHeap);
    let res = []
    for(let j=0;j<k;j++){
        res.push(myHeap.extractTop())
        
    }
    return res
    
  }
  class Heap{
    constructor(arr){
      this.queue = arr
    }
  
    insert(value){
      this.queue.push(value)
      this.bubbleUp();
     }
  
  bubbleUp(){
    let index = this.queue.length-1
    while(index>0){
      let element = this.queue[index],
          parentIndex = Math.floor((index-1)/2),
          parent = this.queue[parentIndex]
      if(parent>=element) break
      this.queue[index] = parent;
      this.queue[parentIndex] = element;
      index = parentIndex
    }
  }
  
  
  extractTop(){
    let top = this.queue[0]
    this.queue[0] = this.queue.pop()
    this.sinkDown(0)
    return top
  }
  
   sinkDown(index){
    let largest = index,
      left = 2*index+1,
      right = 2*index+2,
      size = this.queue.length-1
  
      if(left<size && this.queue[left]<this.queue[index]) largest = left
      if(right<size && this.queue[right]<this.queue[index]) largest = right
  
      if(index!==largest){
        [this.queue[largest], this.queue[index]] = [this.queue[index], this.queue[largest]]
        this.sinkDown(largest)
      }
  }
  }
  
  console.log(topK([1,10,8,9,10,2,3,4,8,8,6], 4));
  
  