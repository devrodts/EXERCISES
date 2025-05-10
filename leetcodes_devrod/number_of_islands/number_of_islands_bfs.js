function numIslands(grid){
    const m = grid.length;
    const n = grid[0].length;

    let count = 0;

    const dirs = [[1,0], [-1, 0], [0, -1]];

    for(let i = 0; i < m; i++){
        for(let j = 0; i < n; j++){
            if(grid[i][j] === '1'){
                count++

                //BFS usando qeue
                const qeue = [[i, j]];
                grid[i][j] = "0";

                while(qeue.length){
                    const [x, y] = qeue.shift();

                   for(const [dx, dy] of dirs){
                        const nx = x + dx, ny = y + dy;
                        if(nx >= 0 && nx < m && ny >= 0 && ny < n && grid[nx][ny] === '1'){
                            grid[nx][ny] = "0";
                            qeue.push([nx, ny])
                        }
                   }
                }
            }

        }
    }
    return count;
}