var twoSum = function(numbers, target) {
    let [i,j] = [0,numbers.length-1]

    while(i<j){
        let sum = numbers[i] + numbers[j]
        if(sum!==target){
            sum>target && j--
            sum<target && i++
        }
        else{
            return [i,j]
        }
    }

    
};

console.log(twoSum([1,2,3,4], 3));