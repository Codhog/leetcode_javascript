/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
 var searchMatrix = function(matrix, target) {
    let m = matrix.length
    for(let i=0;i<m;i++){
        console.log(matrix[i]);
        if(binarySearch(matrix[i], target)) return true
    }
    return false
};

const binarySearch = (arr, target) =>{
    if(!arr.length) return -1;// 考虑边界值
    if(arr.length == 1)return 0;//只有一位无需进入循环
    let start = 0;
    let end = arr.length-1;
    while(start <= end){
        let mid = Math.floor((start + end) / 2);//取中位数，可能除不尽向下取整
        if(arr[mid] === target){
            return true;
        }else if(target > arr[mid]){// 若目标值大于中位值
            start = mid +1 //则说明目标值在更右侧，将初始下标右移至中位数右侧，再次循环
        }else{// 若目标值小于中位值
            end = mid -1 //则说明目标值在更左侧，将结束下标左移至中位数左侧，再次循环
        }
    }
    return false
}

console.log(searchMatrix([[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]],20 ));