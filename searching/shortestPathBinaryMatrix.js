var shortestPathBinaryMatrix = function(grid) {
    if (grid[0][0] === 1) return -1;
    const queue = [[0,0,1]]
    const N = grid.length
    const dirs = [
        [1, 0],
		[-1, 0],
		[0, 1],
		[0, -1],
		[1, 1],
		[1, -1],
		[-1, 1],
		[-1, -1],
	];
    while(queue[0]){
        // let size = queue.length
        let [x,y, depth] = queue.shift()
        grid[x][y] = 1;
        if (x === N - 1 && y === N - 1) return depth;
        for(const [dirx,diry] of dirs){
            let curX = x+dirx
            let curY = y + diry
            if(curX<0 || curX>N-1) continue
            if(curY<0 || curY>N-1) continue
            if(grid[curX][curY]===0){
                queue.push([curX, curY, depth+1])
            } 
            
            
        }
        
    }
    return -1
}; 


console.log(shortestPathBinaryMatrix([[0,0,0],[1,1,0],[1,1,0]]));