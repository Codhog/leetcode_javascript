var rotate = function(matrix) {
    let end = matrix.length - 1
    for(let i=end;i>-1  ;i--){
        for(let j=0;j<=end;j++){
            [matrix[i][j], matrix[end-i][j]] = [matrix[end-i][j], matrix[i][j]]
        }
    }
    return matrix
};
rotate([[1,2,3],[4,5,6],[7,8,9]])
// console.log(rotate([[1,2,3],[4,5,6],[7,8,9]]));