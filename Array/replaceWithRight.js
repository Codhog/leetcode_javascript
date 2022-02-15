var replaceElements = function(arr) {
    //     start from 2nd last element len-2
    //     if previous one element is bigger, start from len- 3         
    //     else smaller replace until meet bigger
        let len = arr.length, end = len-2
        for(let i=end;i>-1;i--){
            if(arr[i]>arr[end]){
                end = i
            }
            else{
                arr[i] = arr[end]
            }
        }
        [arr[len-2],arr[len-1]] = [arr[len-1],-1]
        return arr
    };