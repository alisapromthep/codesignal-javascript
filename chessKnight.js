let cell= "a1";
let cell2= "d4";
let cell3= "b7";

//corner = 2 
//B1,B8,G1,G8 = 3 
//C1,C8-F1,F8 = 4 



function solution(cell) {
    let board = [
        [2,3,4,4,4,4,3,2],
        [3,4,6,6,6,6,4,3],
        [4,6,8,8,8,8,6,4],
        [4,6,8,8,8,8,6,4],
        [4,6,8,8,8,8,6,4],
        [4,6,8,8,8,8,6,4],
        [3,4,6,6,6,6,4,3],
        [2,3,4,4,4,4,3,2]
    ];
    let horizontal = cell[0].charCodeAt() - 97
    return board[cell[1]-1][horizontal];
    
    
}

console.log(solution(cell))

console.log(solution(cell2))

console.log(solution(cell3))