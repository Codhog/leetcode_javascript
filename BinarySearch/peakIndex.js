const peakIndexInMountainArray = (A, low = 0, high = A.length - 1) => {
    if (!A.length) 
        return -1
    
    const mid = ((low + high) / 2) | 0
	
    if (A[mid] > A[mid - 1] && A[mid] > A[mid + 1])
        console.log(mid);
        return mid
    
    if (A[mid] < A[mid - 1]) 
        return peakIndexInMountainArray(A, low, mid)
    
    if (A[mid] < A[mid + 1])
        return peakIndexInMountainArray(A, mid, high)
}

console.log(peakIndexInMountainArray([0,1,2,10,5,2]));

// [0,186,234,534,342,123,122,111,97,65]