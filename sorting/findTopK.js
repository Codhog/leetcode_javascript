function topK(arr, k) {
    // your code here
    const myHeap = new MaxHeap()
    arr.forEach((val)=>myHeap.insert(val))
    console.log(myHeap);
    const res = []
    while(k>0){
        res.push(myHeap.getTop())
        k--
    }
    return res
  }

class MaxHeap{
    constructor(){
        this.queue = []
    }
    insert(val){
        this.queue.push(val)
        this.bubbleUp(this.queue.length-1)
    }

    bubbleUp(index){
        while(index>0){
            let parentIndex = Math.floor((index-1)/2),
            parent = this.queue[parentIndex],
            selectNode = this.queue[parentIndex]
            if(selectNode<parent)break
            [parent, selectNode] = [selectNode, parent]
            index = parentIndex
        }
    }

    getTop(){
        let top = this.queue[0]
        this.queue[0] = this.queue.pop()
        this.heapify(0)
        return top
    }

    heapify(index){
        let largest = index,
        leftIndex = 2*largest+1,
        rightIndex = 2*largest+2,
        root = this.queue[index]
        const thisLength = this.queue.length

        if(this.queue[leftIndex]<thisLength&&this.queue[leftIndex]>root){ //
            largest = leftIndex
        } 
        
        if(this.queue[rightIndex]<thisLength&&this.queue[rightIndex]>root){ //
            largest = rightIndex
        }
        if(largest!==index){ //
            [root, this.queue[largest]] = [this.queue[largest], root]
            this.heapify(largest)
        }
        
        
    }
}


topK([1,10,8,9,10,2,3,4,8,8,6], 4)
// [10, 10, 9, 8]

console.log(topK([1,10,8,9,10,2,3,4,8,8,6], 4));