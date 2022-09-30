// Sudoku is a number-placement puzzle. The objective is to fill a 9 × 9 grid with digits so that each column, each row, and each of the nine 3 × 3 sub-grids that compose the grid contains all of the digits from 1 to 9.

// This algorithm should check if the given grid of numbers represents a correct solution to Sudoku.

let grid = [[1, 3, 2, 5, 4, 6, 9, 8, 7],
        [4, 6, 5, 8, 7, 9, 3, 2, 1],
        [7, 9, 8, 2, 1, 3, 6, 5, 4],
        [9, 2, 1, 4, 3, 5, 8, 7, 6],
        [3, 5, 4, 7, 6, 8, 2, 1, 9],
        [6, 8, 7, 1, 9, 2, 5, 4, 3],
        [5, 7, 6, 9, 8, 1, 4, 3, 2],
        [2, 4, 3, 6, 5, 7, 1, 9, 8],
        [8, 1, 9, 3, 2, 4, 7, 6, 5]];
//true 

let grid2 =  [[1,2,3,4,5,6,7,8,9], 
 [4,5,6,7,8,9,1,2,3], 
 [7,8,9,1,2,3,4,5,6], 
 [2,3,4,5,6,7,8,9,1], 
 [3,4,5,6,7,8,9,1,2], 
 [5,6,7,8,9,1,2,3,4], 
 [6,7,8,9,1,2,3,4,5], 
 [8,9,1,2,3,4,5,6,7], 
 [9,1,2,3,4,5,6,7,8]];
//false 

// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9

function solution(grid) {
    //to check each row, checking each arr in the grid
    //if any of the arr add up to less or more than 45, return false; 
    grid.forEach((row,i)=>{
    let sum = row.reduce((prv,cur)=> prv+cur);
    if( sum !== 45){
        return false;
    }
    })
    //check col, checking arr[i] at the same index
    let col = 0;
    while(col <9 ){
        let row = 0;
        let sum = 0;
        while ( row < 9){
        sum += grid[row][col];
        row++
        }
        if(sum !== 45){
            return false; 
        }
        col ++;
    }
    
    //checking grid 
    
    
    
    
    return true; 

}





//solution 
function solution(grid) {
    var ret = true;
    ret = grid.every((row) => row.every((el, id, arr) => id === arr.indexOf(el)));
    ret =
        ret &&
        grid[0]
            .map((c, i) => grid.map((_, j) => grid[j][i]))
            .every((row) => row.every((el, id, arr) => id === arr.indexOf(el)));
    
        ret =
        ret &&
        grid
            .map((_, i) =>
            grid.map(
                (_, j) =>
                grid[Math.floor(i / 3) * 3 + Math.floor(j / 3)][
                    (i % 3) * 3 + (j % 3)
                ]
            )
            )
            .every((row) => row.every((el, id, arr) => id === arr.indexOf(el)));
        return ret;
    }
    
